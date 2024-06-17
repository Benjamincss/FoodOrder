<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Carbon\Carbon;
use App\Models\Order;




Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');





Route::get('/cart', 'App\Http\Controllers\CartController@getCart');
Route::delete('/cart/remove/{productId}', 'App\Http\Controllers\CartController@removeFromCart');

Route::get('/cart/totals', 'App\Http\Controllers\CartController@Getcarttotal');

Route::put('/order/{order}', [App\Http\Controllers\OrderController::class, 'update']);

Route::get('/product/{product}/options', [App\Http\Controllers\ProductOptionsController::class, 'index']);


Route::get('/order', function (Request $request) {
    $today = Carbon::today('Europe/Paris'); // replace 'Europe/Paris' with your timezone
    return Order::with('products')  // Charge les produits liés à chaque commande
    ->where('created_at', '>=', $today)
        ->whereIn('status', ['en cours de prepa', 'finis'])
        ->get();
});


Route::post('/orders/{order}/products/', [App\Http\Controllers\CartController::class, 'addToCart']);


Route::post('/orders', [App\Http\Controllers\OrderController::class, 'store']);


Route::get('/test', [App\Http\Controllers\OrderController::class, 'getOrdersWithHighestTotal']);
Route::get('/cj', [App\Http\Controllers\OrderController::class, 'getOrdersPerDay']);

Route::get('/product', [App\Http\Controllers\ProductController::class, 'index']);
