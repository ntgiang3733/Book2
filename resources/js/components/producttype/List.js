import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';

export default class List extends Component {

    constructor() {
        super();
        this.state={
            producttypes:[],
            activePage : 1,
            itemsCountPerPage : 1 ,
            totalItemsCount : 1,
            pageRangeDisplayed : 3
        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/admin/producttype')
        .then(response => {
            this.setState({
                producttypes:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
        
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}` );
        //this.setState({activePage : pageNumber });
        axios.get('http://localhost:8000/admin/producttype?page=' + pageNumber)
        .then(response => {
            this.setState({
                producttypes:response.data.data,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                activePage:response.data.current_page
            });
        });
    }

    onDelete(producttype_id) {
        axios.delete('http://localhost:8000/admin/producttype/delete/' + producttype_id)
        .then(response=>{
            var producttypes = this.state.producttypes;
            for(var i=0 ; i<producttypes.length ; i++) {
                if(producttypes[i].id == producttype_id) {
                    producttypes.splice(i,1);
                    this.setState({producttypes:producttypes});
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
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.producttypes.map(producttype => {
                                return (
                                    <tr>
                                        <th scope="row">{producttype.id}</th>
                                        <td>{producttype.name}</td>
                                        <td>{producttype.idCategory=='1'?"Sách tiếng Việt":"Sách tiếng Anh"}</td>
                                        <td>{producttype.status}</td>
                                        <td>
                                            <Link to={`/producttype/edit/${producttype.id}`}>Edit | </Link>
                                            <a href="#" onClick={this.onDelete.bind(this,producttype.id)}>Delete</a></td>
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
