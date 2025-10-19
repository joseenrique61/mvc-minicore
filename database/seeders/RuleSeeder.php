<?php

namespace Database\Seeders;

use App\Models\Rule;
use Illuminate\Database\Seeder;

class RuleSeeder extends Seeder
{
    public function run(): void
    {
        Rule::factory()->create([
            'name' => 'Standard Commission',
            'percentage' => 0.1,
            'min_amount' => 0,
        ]);
        Rule::factory()->create([
            'name' => 'Bonus Commission',
            'percentage' => 0.15,
            'min_amount' => 1000,
        ]);
        Rule::factory()->create([
            'name' => 'Super Bonus Commission',
            'percentage' => 0.2,
            'min_amount' => 3000,
        ]);
    }
}
