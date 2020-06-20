import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';

export default class List extends Component {

    constructor() {
        super();
        this.state={
            products:[],
            activePage : 1,
            itemsCountPerPage : 1 ,
            totalItemsCount : 1,
            pageRangeDisplayed : 3
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/admin/product')
        .then(response => {
            this.setState({
                products:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page,
            });
        });
        
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}` );
        axios.get('http://localhost:8000/admin/product?page=' + pageNumber)
        .then(response => {
            this.setState({
                products:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    onDelete(product_id) {
        axios.delete('http://localhost:8000/admin/product/delete/' + product_id)
        .then(response=>{
            var products = this.state.products;
            for(var i=0 ; i<products.length ; i++) {
                if(products[i].id == product_id) {
                    products.splice(i,1);
                    this.setState({products:products});
                }
            }
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Information</th>
                            <th scope="col">Category</th>
                            <th scope="col">Product Type</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(product => {
                                return (
                                    <tr>
                                        <th scope="row">{product.id}</th>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <ul>
                                                <li>Quantity : {product.quantity}</li>
                                                <li>Price : {product.price}</li>
                                                <li>Promotional : {product.promotional}</li>
                                                <li>Image : <img src={`img/upload/product/${product.image}`} width="100" height="150"/></li>
                                            </ul>
                                        </td>
                                        <td>{product.idCategory}</td>
                                        <td>{product.idProductType}</td>
                                        <td>{product.status}</td>
                                        <td>
                                            <Link to={`/product/edit/${product.id}`}>Edit | </Link>
                                            <a href="#" onClick={this.onDelete.bind(this,product.id)}>Delete</a></td>
                                    </tr>                                       
                                )
                            })
                        
                        }
                        
                    </tbody>
                </table>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage = {this.state.activePage}
                        itemsCountPerPage = {this.state.itemsCountPerPage}
                        totalItemsCount = {this.state.totalItemsCount}
                        pageRangeDisplayed = {this.state.pageRangeDisplayed}
                        onChange = {this.handlePageChange}
                        itemClass = 'page-item'
                        linkClass = 'page-link'
                    />
                </div>
                
            </div>

            
        );
    }
}
