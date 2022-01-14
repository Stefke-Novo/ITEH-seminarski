<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\GenreController;
use App\Http\Controllers\API\TitleController;
use App\Http\Controllers\API\FrontendController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Auth Routes
Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::post('logout',[AuthController::class,'logout']);

//User Genre Routes
Route::get('get-genre',[FrontendController::class,'genre']);
//User itle Routes
Route::get('get-title/{slug}',[FrontendController::class,'title']);
Route::get('view-title/{genre_slug}/{title_slug}',[FrontendController::class,'viewTitle']);

//Admin Genre Routes
Route::get('show-genre',[GenreController::class,'index']);
Route::get('all-genre',[GenreController::class,'showAll']);
Route::post('add-genre',[GenreController::class,'store']);
Route::get('edit-genre/{id}',[GenreController::class,'edit']);
Route::put('update-genre/{id}',[GenreController::class,'update']);
Route::delete('delete-genre/{id}',[GenreController::class,'destroy']);
//Admin Title Routes
Route::get('show-title',[TitleController::class,'index']);
Route::post('add-title',[TitleController::class,'store']);
Route::get('edit-title/{id}',[TitleController::class,'edit']);
Route::post('update-title/{id}',[TitleController::class,'update']);
Route::delete('delete-title/{id}',[TitleController::class,'destroy']);




 Route::middleware('auth:api')->get('/user', function (Request $request) {
     return $request->user();
 });