<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoryId = Category::where('name', 'boisson')->first()->id;

        $products = [
            ['name' => 'Pepsi', 'description' => 'Une description de Pepsi', 'category_id' => $categoryId],
            ['name' => 'Coca-Cola', 'description' => 'Une description de Coca-Cola', 'category_id' => $categoryId],

        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
