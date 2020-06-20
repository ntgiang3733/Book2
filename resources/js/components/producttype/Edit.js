import React, { Component } from 'react';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {

    constructor(props) {
        super(props);
        this.onChangeProducttypeName = this.onChangeProducttypeName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            producttype_name : '',
            idCategory : '10',
            categories : [],
            alert_message : ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/admin/producttype/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                producttype_name:response.data.name,
            });
        });
        axios.get('http://localhost:8000/admin/category')
        .then(response => {
            this.setState({ categories:response.data.data});
        });
    }

    onChangeProducttypeName(e) {
        this.setState({
            producttype_name : e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            idCategory : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const producttype = {
            producttype_name : this.state.producttype_name,
            idCategory : this.state.idCategory
        }
        axios.put('http://localhost:8000/admin/producttype/update/' + this.props.match.params.id, producttype)
        .then(res=>{
            this.setState({alert_message:'success'});
        }).catch(error=>{
            this.setState({alert_message:'error'});
        });
    }

    render() {
        return (
            <div>
                <hr/>

                {this.state.alert_message=='success'?<SuccessAlert message={'Updated successfully'} />:null}
                {this.state.alert_message=='error'?<ErrorAlert message={'Error occured while Updating'} />:null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="producttype_name">Producttype Name</label>
                        <input type="text" className="form-control" id="producttype_name"
                        value={this.state.producttype_name} onChange={this.onChangeProducttypeName} 
                        aria-describedby="emailHelp" placeholder={this.state.producttype_name} />
                        <br/>
                        <label for="idCategory">Category</label>
                        <select className="form-control" id="idCategory"
                        value={this.state.idCategory} onChange={this.onChangeCategory}>
                            {
                                this.state.categories.map(category => {
                                    return (<option value={category.id}>{category.name}</option>);
                                })
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
