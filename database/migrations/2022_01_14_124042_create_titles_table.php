<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titles', function (Blueprint $table) {
            $table->id();
            $table->integer('genre_id');
            $table->string('slug');
            $table->string('name');
            $table->string('author');
            $table->string('description')->nullable();
            $table->string('publisher');
            $table->string('price');
            $table->float('rating');
            $table->string('image')->nullable();
            $table->tinyInteger('featured')->default(0)->nullable();
            $table->tinyInteger('popular')->default(0)->nullable();
            $table->tinyInteger('status')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('titles');
    }
}
