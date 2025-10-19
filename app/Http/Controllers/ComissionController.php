<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use App\Models\Sale;
use App\Models\Seller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ComissionController extends Controller
{
    public function index()
    {
        return Inertia::render("index", [
            "sellers" => Seller::all(),
            "rules" => Rule::all(),
            "sales" => Sale::with("seller")->get()
        ]);
    }

    public function filter(Request $request) 
    {
        $data = $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date'
        ]);

        $start_date = Carbon::parse($data['start_date'])->endOfDay();
        $end_date = Carbon::parse($data['end_date'])->endOfDay();

        $sales = Sale::with("seller")->whereBetween("date", [
            $start_date,
            $end_date
        ])->get();

        $aggregated_sales = [];

        foreach ($sales as $sale) {
            if (!array_key_exists($sale->seller->name, $aggregated_sales)) {
                $aggregated_sale = new Sale();
                $aggregated_sale->seller()->associate($sale->seller);
                $aggregated_sale->amount = 0;
                $aggregated_sale->comission = 0;

                $aggregated_sales[$sale->seller->name] = $aggregated_sale;
            }
            $aggregated_sales[$sale->seller->name]->amount += $sale->amount;
        }

        $comissions = [];

        foreach ($aggregated_sales as $aggregated_sale) {
            $rule = Rule::where("min_amount", "<=", $aggregated_sale->amount)
                ->orderByDesc("min_amount")
                ->first();
            
            $percentage = 0;
            if ($rule !== null) {
                $percentage = $rule->percentage;
            }

            $comissions[$aggregated_sale->seller->name] = $percentage * $aggregated_sale->amount;
        }

        return Inertia::render("index", [
            "sellers" => Seller::all(),
            "rules" => Rule::all(),
            "sales" => array_values($aggregated_sales),
            "comissions" => $comissions
        ]);
    }
}
