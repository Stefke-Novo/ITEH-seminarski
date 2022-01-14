<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Title extends Model
{
    use HasFactory;
    protected $table='titles';
    protected $fillable=[
        'genre_id',
        'slug',
        'name',
        'author',
        'description',
        'publisher',
        'price',
        'rating',
        'featured',
        'popular',
        'status',
    ];

    protected $with=['genre'];
    public function genre(){
        //relationship join
        return $this->belongsTo(Genre::class,'genre_id','id');
    }
}
