@extends('client.layouts.master')

@section('title')
    Trang chu
@endsection


@section('content')
    <!-- tittle heading -->
    <h3 class="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
        <span>S</span>ản
        <span>P</span>hẩm
        <span>N</span>ổi
        <span>B</span>ật</h3>
    <!-- //tittle heading -->
    <div class="row">
        <!-- product left -->
        <div class="agileinfo-ads-display col-lg-9">
            <div class="wrapper">
                <!-- first section -->
                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 class="heading-tittle text-center font-italic">{{ $proapple[0]->categories->name }}</h3>
                    <div class="row">
                        @foreach( $proapple as $pro)
                        <div class="col-md-4 product-men mt-5">
                            <div class="men-pro-item simpleCart_shelfItem">
                                <div class="men-thumb-item text-center">
                                    <img src="img/upload/product/{{ $pro->image }}" class="img-fluid" alt="">
                                    <div class="men-cart-pro">
                                        <div class="inner-men-cart-pro">
                                            <a href="{{ $pro->slug}}.html" class="link-product-add-cart">Chi tiet</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-info-product text-center border-top mt-4">
                                    <h4 class="pt-1">
                                        <a href="{{ $pro->slug}}.html">{{ $pro->name }}</a>
                                    </h4>
                                    <div class="info-product-price my-2">
                                        @if($pro->promotional>0)
                                            <span class="item_price">
                                                {{ number_format($pro->promotional) }}
                                            </span>
                                            <del>{{ number_format($pro->price) }}</del>
                                        @else
                                            <span class="item_price">
                                                {{ number_format($pro->price) }}
                                            </span>
                                        @endif
                                    </div>
                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                        <a href="{{ route('addCart', ['id' => $pro->id]) }}">Them vao gio hang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
                <!-- //first section -->
                <!-- second section -->
                <div class="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <h3 class="heading-tittle text-center font-italic">{{ $proandroid[0]->categories->name }}</h3>
                    <div class="row">
                        @foreach( $proandroid as $pro)
                        <div class="col-md-4 product-men mt-5">
                            <div class="men-pro-item simpleCart_shelfItem">
                                <div class="men-thumb-item text-center">
                                    <img src="img/upload/product/{{ $pro->image }}" class="img-fluid" alt="">
                                    <div class="men-cart-pro">
                                        <div class="inner-men-cart-pro">
                                            <a href="{{ $pro->slug}}.html" class="link-product-add-cart">Chi tiet</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-info-product text-center border-top mt-4">
                                    <h4 class="pt-1">
                                        <a href="{{ $pro->slug}}.html">{{ $pro->name }}</a>
                                    </h4>
                                    <div class="info-product-price my-2">
                                        @if($pro->promotional>0)
                                            <span class="item_price">
                                                {{ number_format($pro->promotional) }}
                                            </span>
                                            <del>{{ number_format($pro->price) }}</del>
                                        @else
                                            <span class="item_price">
                                                {{ number_format($pro->price) }}
                                            </span>
                                        @endif
                                    </div>
                                    <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                        <a href="{{ route('addCart', ['id' => $pro->id]) }}">Them vao gio hang</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
                <!-- //second section -->
                
            </div>
        </div>
        <!-- //product left -->

        
    </div>
@endsection