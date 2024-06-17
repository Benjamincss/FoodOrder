<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductOptionsController extends Controller
{
    public function index(Product $product)
    {
        return $product->options()->get();
    }
}
