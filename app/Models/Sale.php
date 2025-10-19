<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $fillable = [
        'amount',
        'date',
        'seller_id',
    ];

    protected $casts = [
        'date' => 'datetime',
        'amount' => 'float'
    ];

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
}