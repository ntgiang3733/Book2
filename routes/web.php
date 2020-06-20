<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//ADMIN
Route::post('admin/login', 'UserController@loginAdmin')->name('admin.login');
Route::view('admin/login','admin.pages.login')->name('login.admin');
Route::get('getproducttype' , 'AjaxController@getProductType');

Route::group(['prefix' => 'admin' , 'middleware' => 'adminMiddleware'] , function() {
    //.../admin/...
    Route::view('/','admin');

    Route::get('category', 'CategoryController@index');
    Route::post('category/store', 'CategoryController@store');
    Route::get('category/edit/{id}', 'CategoryController@edit');
    Route::put('category/update/{id}', 'CategoryController@update');
    Route::delete('category/delete/{id}', 'CategoryController@destroy');

    Route::get('producttype', 'ProductTypeController@index');
    Route::post('producttype/store', 'ProductTypeController@store');
    Route::get('producttype/edit/{id}', 'ProductTypeController@edit');
    Route::put('producttype/update/{id}', 'ProductTypeController@update');
    Route::delete('producttype/delete/{id}', 'ProductTypeController@destroy');

    Route::get('product', 'ProductController@index');
    Route::post('product/store', 'ProductController@store');
    Route::get('product/edit/{id}', 'ProductController@edit');
    Route::put('product/update/{id}', 'ProductController@update');
    Route::delete('product/delete/{id}', 'ProductController@destroy');

    Route::resource('order','OrderController');
    Route::resource('orderdetail','OrderDetailController');
});

//CLIENT
Route::get('callback/{social}', 'UserController@handleProviderCallback');
Route::get('login/{social}', 'UserController@redirectProvider')->name('login.social');
Route::get('logout','UserController@logout');
Route::post('register','UserController@registerClient')->name('register');
Route::post('updatepass','UserController@updatePassClient');
Route::post('login','UserController@loginClient');

Route::get('/', 'HomeController@index');
Route::get('trangchu', 'HomeController@index');
Route::resource('cart','CartController');
Route::get('addcart/{id}','CartController@addCart') ->name('addCart');
Route::get('checkout','CartController@checkout')->name('cart.ckeckout');

Route::resource('customer','CustomerController');
Route::get('{slug}.html', 'HomeController@getDetail');

Route::get('search/name', 'ProductController@searchByName');

