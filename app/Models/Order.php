<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Order extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'order_date',
        'order_number',
        'customer_id',
        'product_id',
        'quantity',
        'status',
        'cart_id',
        'price',
        'total',
    ];



    protected $guarded = ['price'];



    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function order()
    {
        return $this->belongsTo(Order::class);
    }



    public function products()
    {
        return $this
            ->belongsToMany(Product::class)
            ->withPivot(['quantity', 'price_in_cents'])
            ->withTimestamps();
    }


    public function cart()
    {
        return $this->hasOne(Cart::class);
    }



    public function calculateTotal()

    {
        return $this->quantity * $this->price ;


    }

    public function scopeFinished($query)
    {
        return $query->where('status', 'finis');
    }


    public static function getOrdersPerDay()
    {
        return self::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->get();
    }




}




