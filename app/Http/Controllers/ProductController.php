<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use App\Models\Categories;
use App\Models\ProductTypes;
use File;
use App\Http\Requests\StoreProductRequest;
use Validator;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Products::paginate(3);
        return $product;
    }

    public function searchByName(Request $request) {
        $product = Products::where('name', 'like', '%' . $request->value . '%')->get();
        return response()->json($product);
    }

    public function filter(Request $request) {
        $product = (new Products)->newQuery();

        if($request->has('price')) {
            $product->orderBy('price','desc');
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
        $product = new Products();
        $product->name = $request['product_name'];
        $product->quantity = $request['quantity'];
        $product->price = $request['price'];
        $product->promotional = $request['promotional'];
        $product->description = $request['description'];
        $product->slug = utf8tourl($request['product_name']);
        $product->idCategory = $request['idCategory'];
        $product->idProductType = $request['idProductType'];
        $product->status = 1;
        $product->image = $request['image'];
        $request['file']->move('img/upload/product',$request['image']);

        $product->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Products::find($id);
        return $product;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $product = Products::find($id);

        $product->name = $request->product_name;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->promotional = $request->promotional;
        $product->description = $request->description;
        $product->slug = utf8tourl($request->product_name);
        $product->idCategory = $request->idCategory;
        $product->idProductType = $request->idProductType;
        $product->status = 1;

        $product->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Products::find($id);
        $product->delete();
    }
}
