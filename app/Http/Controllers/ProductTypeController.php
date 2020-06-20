<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductTypes;
use App\Models\Categories;
use App\Http\Requests\StoreProductTypeRequest;
use Validator;
class ProductTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $producttype = ProductTypes::paginate(7);
        return $producttype;
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
        $producttype = new ProductTypes();
        $producttype->name = $request->producttype_name;
        $producttype->slug = utf8tourl($request->producttype_name);
        $producttype->idCategory = $request->idCategory;
        $producttype->status = 1;
        
        $producttype->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $producttype = ProductTypes::find($id);
        return $producttype;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $producttype = ProductTypes::find($id);
        $producttype->name = $request->producttype_name;
        $producttype->slug = utf8tourl($request->producttype_name);
        $producttype->idCategory = $request->idCategory;
        $producttype->status = 1;

        $producttype->save();
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $producttype = ProductTypes::find($id);
        $producttype->delete();
    }
}
