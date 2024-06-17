<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discount extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'quantity',
        'reduction',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }




}
