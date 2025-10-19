<?php

use App\Http\Controllers\ComissionController;
use Illuminate\Support\Facades\Route;

Route::get('/', [ComissionController::class, 'index'])->name('comission.index');
Route::post('/', [ComissionController::class, 'filter'])->name('comission.filter');
