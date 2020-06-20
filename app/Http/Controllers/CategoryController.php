<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use App\Models\Categories;
use App\Http\Requests\StoreCategoryRequest;
use Validator;
use Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $category = Categories::paginate(3);
        if($user->can('view',Categories::class)) {
            
            return $category;
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $category = new Categories();
        $category->name = $request->category_name;
        $category->slug = utf8tourl($request->category_name);
        $category->status = 1;
        if($user->can('create',Categories::class)) {
            $category->save();
            
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        if($user->can('update',Categories::class)) {
            $category = Categories::find($id);
            return $category;
            
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        if($user->can('update',Categories::class)) {
            
            $category = Categories::find($id);
            $category->name = $request->category_name;
            $category->slug = utf8tourl($request->category_name);
            $category->status = 1;
            $category->save();

        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Auth::user();
        if($user->can('delete',Categories::class)) {
            $category = Categories::find($id);
            $category->delete();
        }
        
    }
}
