<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = ['session_id', 'status'];

    public function items()
    {
        return $this->hasMany(CartItem::class);
    }

    public function products()
    {
        return $this
            ->belongsToMany(Product::class, 'cart_items')
            ->withPivot(['quantity', 'price_in_cents'])
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
