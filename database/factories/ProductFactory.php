<?php

namespace Database\Factories;

use Faker\Factory as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * The current id.
     *
     * @var int
     */
    protected static $currentId = 1;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create();
        $fastFoodItems = ['Burger', 'Pizza', 'Hot Dog', 'Sandwich', 'Tacos', 'Fries', 'Chicken Nuggets', 'Donuts', 'Ice Cream', 'Milkshake'];

        return [
            'id' => self::$currentId++,
            'name' => $faker->randomElement($fastFoodItems),
            'description' => $faker->sentence,
            'image' => $faker->imageUrl(),
            'quantity' => $faker->numberBetween(1, 100),
            'is_available' => $faker->boolean,
            'is_advertised' => $faker->boolean,
            'price_in_cents' => $faker->numberBetween(100, 10000),
            'expected_time' => $faker->numberBetween(10, 60),
            'created_at' => $faker->dateTimeThisYear,
            'updated_at' => $faker->dateTimeThisYear,
            'category_id' => $faker->numberBetween(1, 3),

        ];
    }
}
