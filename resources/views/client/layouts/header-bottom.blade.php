<div class="header-bot">
    <div class="container">
        <div class="row header-bot_inner_wthreeinfo_header_mid">
            <!-- logo -->
            <div class="col-md-3 logo_agile">
                <h1 class="text-center">
                    <a href="/AppStore/public/" class="font-weight-bold font-italic">
                        <img src="assets/client/images/logo2.ico" alt=" ">Túp lều tranh 
                    </a>
                </h1>
            </div>
            <!-- //logo -->
            <!-- header-bot -->
            <div class="col-md-9 header mt-4 mb-md-0 mb-4">
                <div class="row">
                    <!-- search -->
                    <div class="col-10 agileits_search">
                        <form class="form-inline typeahead">
                            <div class="form-group">
                                <input type="name" class="form-control search-input" id="searchtest" autocomplete="off" placeholder="Nhập tên sản phẩm...">
                            </div>
                            <button type="submit" class="btn btn-default">Tìm kiếm</button>
                        </form>
                    </div>
                    <!-- //search -->
                    <!-- cart details -->
                    <div class="col-2 top_nav_right text-center mt-sm-0 mt-2">
                        <div class="wthreecartaits wthreecartaits2 cart cart box_1">
                            <a @if(Auth::check() ) href="{{ route('cart.index')}}" @else href="#" data-toggle="modal" data-target="#login" @endif title="Gio hang hien tai :  {{Cart::count()}} mat hang" class="btn w3view-cart">
                                <i class="fas fa-cart-arrow-down"></i>
                            </a>
                        </div>
                    </div>
                    <!-- //cart details -->
                </div>
            </div>
        </div>
    </div>
</div>