<?php

namespace Database\Factories;

use App\Models\Seller;
use Illuminate\Database\Eloquent\Factories\Factory;

class SaleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'seller_id' => Seller::factory(),
            'amount' => $this->faker->randomFloat(2, 100, 5000),
            'date' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}
