<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RuleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->words(2, true),
            'percentage' => $this->faker->numberBetween(5, 20),
            'min_amount' => $this->faker->randomElement([100, 500, 1000]),
        ];
    }
}
