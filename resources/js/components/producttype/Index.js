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
                    <Link to="/producttype" className="btn btn-primary">List</Link> &nbsp;
                    <Link to="/producttype/add" className="btn btn-primary">Add</Link><hr/>


                    <Route exact path="/producttype" component={List} />
                    <Route exact path="/producttype/add" component={Add} />
                    <Route exact path="/producttype/edit/:id" component={Edit} />
            </div>
        );
    }
}
