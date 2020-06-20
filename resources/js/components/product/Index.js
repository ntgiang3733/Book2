import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Add from './Add';
import List from './List';
import Edit from './Edit';

export default class Index extends Component {
    render() {
        return (
            <div>
                    <hr />
                    <Link to="/product" className="btn btn-primary">List</Link> &nbsp;
                    <Link to="/product/add" className="btn btn-primary">Add</Link><hr/>


                    <Route exact path="/product" component={List} />
                    <Route exact path="/product/add" component={Add} />
                    <Route exact path="/product/edit/:id" component={Edit} />
            </div>
        );
    }
}
