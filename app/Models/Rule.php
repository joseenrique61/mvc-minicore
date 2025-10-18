<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = ["name", "percentage", "min_amount", "max_amount"];
}
