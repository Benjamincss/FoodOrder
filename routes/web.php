<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserController;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/csrf-token', function () {
    return csrf_token();
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/logout', function () {
    Auth::logout();
    return redirect('/login');
});

Route::post('/orders', [App\Http\Controllers\OrderController::class, 'store']);


Route::post('/cart/add/{productId}', [App\Http\Controllers\CartController::class, 'addToCart']);


Route::get('/users/{userId}/orders', [App\Http\Controllers\OrderController::class, 'showOrders']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
