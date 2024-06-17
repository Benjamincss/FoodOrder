<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{

    public function run(): void
    {
    $categories = [
    ['name' => 'food', 'description' => 'Tout sur la nourriture'],
    ['name' => 'boisson', 'description' => 'Tout sur les boissons'],
    ['name' => 'dessert', 'description' => 'Tout sur les desserts'],

    ];

    foreach ($categories as $category) {
    Category::create($category);
    }
    }
    }
