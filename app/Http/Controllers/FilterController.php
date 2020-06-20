<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Categories;
use App\Models\ProductTypes;
use App\Models\Products;
use Auth;
use Cart;

class FilterController extends Controller
{
    public function search($keyword)
    {
        $product2 = Products::where('status',1)->where('idCategory',6)->get();
        return view('client.pages.filter',['proapple' => $product1, 'proandroid' => $product2]);
    }
}
