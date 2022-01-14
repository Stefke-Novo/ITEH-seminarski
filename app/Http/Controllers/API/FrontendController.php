<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Genre;
use App\Models\Title;

class FrontendController extends Controller
{
    public function genre()
    {
        $genre = Genre::where('status', '0')->get();
        return response()->json([
            'status' => 200,
            'genre' => $genre
        ]);
    }
    public function title($slug)
    {
        $genre = Genre::where('slug', $slug)->where('status', '0')->first();
        if ($genre) {
            $title = Title::where('genre_id', $genre->id)->where('status', '0')->get();
            if ($title) {
                return response()->json([
                    'status' => 200,
                    'title_data' => [
                        'title'=>$title,
                        'genre'=>$genre,
                    ]
                ]);
            }else{
                return response()->json([
                    'status' => 400,
                    'message' => 'Title Unavailable'
                ]);
            }
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'Genre Not Found'
            ]);
        }
    }

    public function viewTitle($genre_slug,$title_slug){
        $genre = Genre::where('slug', $genre_slug)->where('status', '0')->first();
        if ($genre) {
            $title = Title::where('genre_id', $genre->id)->where('slug',$title_slug)->where('status', '0')->first();

            if ($title) {
                return response()->json([
                    'status' => 200,
                    'title'=>$title,
                ]);
            }else{
                return response()->json([
                    'status' => 400,
                    'message' => 'Title Unavailable'
                ]);
            }
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'Genre Not Found'
            ]);
        }
    }
}
