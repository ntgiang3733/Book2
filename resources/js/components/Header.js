import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import Category from './category/Index';
import ProductType from './producttype/Index';
import Product from './product/Index';

export default class Header extends Component {
    render() {
        return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/admin">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/producttype">Product Type</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

                    <div className="row">
                        <div className="col-md-12">
                            <Route exact path='/admin' component={Home} />
                            <Route exact path='/category' component={Category} />
                            <Route exact path="/category/add" component={Category} />
                            <Route exact path="/category/edit/:id" component={Category} />

                            <Route exact path='/producttype' component={ProductType} />
                            <Route exact path="/producttype/add" component={ProductType} />
                            <Route exact path="/producttype/edit/:id" component={ProductType} />

                            <Route exact path='/product' component={Product} />
                            <Route exact path="/product/add" component={Product} />
                            <Route exact path="/product/edit/:id" component={Product} />
                        </div>
                    </div>

                </div>
        );
    }
}
