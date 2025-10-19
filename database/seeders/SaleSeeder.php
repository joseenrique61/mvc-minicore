<?php

namespace Database\Seeders;

use App\Models\Sale;
use App\Models\Seller;
use Illuminate\Database\Seeder;

class SaleSeeder extends Seeder
{
    public function run(): void
    {
        $sellers = Seller::all();
        if ($sellers->isEmpty()) {
            $this->command->info('No sellers found. Please run the SellerSeeder first.');
            return;
        }

        Sale::factory()->count(100)->make()->each(function ($sale) use ($sellers) {
            $sale->seller_id = $sellers->random()->id;
            $sale->save();
        });
    }
}
