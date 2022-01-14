<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Validator;

class GenreController extends Controller
{

    public function index(){
        $genre=Genre::all();
        return response()->json([
            'status'=>200,
            'genre'=>$genre,
        ]);
    }

    public function showAll(){
        $genre=Genre::where('status','0')->get();
        return response()->json([
            'status'=>200,
            'genre'=>$genre,
        ]);
    }
    public function edit($id){
        $genre=Genre::find($id);
        if($genre){
            return response()->json([
                'status'=>200,
                'genre'=>$genre,
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Genre not found',
            ]);
        }
    }


    public function update(Request $request,$id){
        $validator=Validator::make($request->all(),[
            'slug'=>'required|max:255',
            'name'=>'required|max:255',
        ]);
        if($validator->fails()){
            
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $genre=Genre::find($id);
            if($genre){
                $genre->slug=$request->input('slug');
                $genre->name=$request->input('name');
                $genre->description=$request->input('description');
                $genre->status=$request->input('status')==true?'1':'0';
                $genre->save();
                return response()->json([
                    'status'=>200,
                    'message'=>'Genre updated successfully',
                ]);
            }else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Genre anot found',
                ]);
            }
           

        }
    }

    public function store(Request $request){
        $validator=Validator::make($request->all(),[
            'slug'=>'required|max:255',
            'name'=>'required|max:255',
        ]);
        if($validator->fails()){
            
            return response()->json([
                'status'=>400,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $genre=new Genre;
            $genre->slug=$request->input('slug');
            $genre->name=$request->input('name');
            $genre->description=$request->input('description');
            $genre->status=$request->input('status')==true?'1':'0';
            $genre->save();
            return response()->json([
                'status'=>200,
                'message'=>'Genre added successfully',
            ]);

        }
    }

    public function destroy($id){
        $genre=Genre::find($id);
        if($genre){
            $genre->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Genre deleted successfully',
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Genre not found',
            ]);
        }
        
    }
}
