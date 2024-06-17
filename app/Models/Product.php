<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'price_in_cents',
        'description',
        'image',
    ];


    public function options()
    {
        return $this->belongsToMany(Option::class, 'product_options');
    }


    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_product')
            ->withPivot('quantity')
            ->withTimestamps();
    }

    public function variants()
    {
        return $this->hasMany(ProductVariant::class);
    }


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function isAvailable(): bool
    {

        foreach ($this->variants as $variant) {
            if (!$variant->isInStock()) {
                return false;
            }
        }
        return true;

    }



}
