<?php

namespace Database\Factories;
use App\Models\User;
use Faker\Factory as Faker;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    protected $model = \App\Models\Order::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = Faker::create();
        return [

            'name' => 'Order' . $faker->numberBetween(1, 100),
            'user_id' => User::factory(),
            'status' => $faker->randomElement(['en cours de prepa', 'finis', 'commander']),
            'total_amount' => $faker->randomFloat(2, 0, 10000), // generates a random float number between 0 and 10000 with 2 decimal places
            'payment_id' => 9,
            'delivery_address' => $faker->address,



        ];
    }
}
