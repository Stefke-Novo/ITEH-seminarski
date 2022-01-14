<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Title;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;

class TitleController extends Controller
{
    
    public function index(){
        $title=Title::all();
        return response()->json([
            'status'=>200,
            'title'=>$title,
        ]);
    }


    public function edit($id){
        $title=Title::find($id);
        if($title){
            return response()->json([
                'status'=>200,
                'title'=>$title,
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Title not found',
            ]);
        }
    }


    public function update(Request $request,$id){
        $validator=Validator::make($request->all(),[
            'genre_id'=>'required|max:255',
            'slug'=>'required|max:255',
            'name'=>'required|max:255',
            'author'=>'required|max:255',
            'publisher'=>'required|max:255',
            'price'=>'required|max:20',
            'rating'=>'required|min:1|max:10',
        ]);
        if($validator->fails()){
            
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $title=Title::find($id);
            if($title){
                $title->genre_id=$request->input('genre_id');
                $title->slug=$request->input('slug');
                $title->name=$request->input('name');
                $title->author=$request->input('author');
                $title->description=$request->input('description');
                $title->publisher=$request->input('publisher');
                $title->price=$request->input('price');
                $title->rating=$request->input('rating');
    
                if($request->hasFile('image')){
                    $path=$title->image;
                    if(File::exists($path)){
                        File::delete($path);
                    }
                    $file=$request->file('image');
                    $extension=$file->getClientOriginalExtension();
                    $filename=time().'.'.$extension;
                    $file->move('uploads/title/',$filename);
                    $title->image='uploads/title/'.$filename;
                }
    
                $title->featured=$request->input('featured')==true?'1':'0';
                $title->popular=$request->input('popular')==true?'1':'0';
                $title->status=$request->input('status')==true?'1':'0';
    
                $title->update();
                
                return response()->json([
                    'status'=>200,
                    'message'=>'Title updated successfully',
                ]);
            }else{
                return response()->json([
                    'status'=>404,
                    'message'=>'Title not found',
                ]);

            }

        }
    }

    public function store(Request $request){
        $validator=Validator::make($request->all(),[
            'genre_id'=>'required|max:255',
            'slug'=>'required|max:255',
            'name'=>'required|max:255',
            'author'=>'required|max:255',
            'publisher'=>'required|max:255',
            'price'=>'required|max:20',
            'rating'=>'required|min:1|max:10',
            'image'=>'image|mimes:jpeg,jpg,png|max:2048',
        ]);
        if($validator->fails()){
            
            return response()->json([
                'status'=>422,
                'errors'=>$validator->messages(),
            ]);
        }else{
            $title=new Title;
            $title->genre_id=$request->input('genre_id');
            $title->slug=$request->input('slug');
            $title->name=$request->input('name');
            $title->author=$request->input('author');
            $title->description=$request->input('description');
            $title->publisher=$request->input('publisher');
            $title->price=$request->input('price');
            $title->rating=$request->input('rating');
            if($request->hasFile('image')){
                $file=$request->file('image');
                $extension=$file->getClientOriginalExtension();
                $filename=time().'.'.$extension;
                $file->move('uploads/title/',$filename);
                $title->image='uploads/title/'.$filename;
            }

            $title->featured=$request->input('featured');
            $title->popular=$request->input('popular');
            $title->status=$request->input('status');

            $title->save();
            
            return response()->json([
                'status'=>200,
                'message'=>'Title added successfully',
            ]);

        }
    }

    public function destroy($id){
        $title=Title::find($id);
        if($title){
            $title->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Title deleted successfully',
            ]);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Title not found',
            ]);
        }
        
    }
}
