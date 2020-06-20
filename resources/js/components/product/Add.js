import React, { Component } from 'react';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Add extends Component {

    constructor() {
        super();
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePromotional = this.onChangePromotional.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.state = {
            product_name : '',
            quantity : 0,
            price : 0,
            promotional : 0,
            image : '',
            description : '',
            idCategory : 1,
            idProductType : 38,
            producttypes : [],
            categories : [],
            alert_message : ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/admin/category')
        .then(response => {
            this.setState({ categories:response.data.data});
        });
        axios.get('http://localhost:8000/admin/producttype')
        .then(response => {
            this.setState({ producttypes:response.data.data});
        })
    }

    onChangeProductName(e) {
        this.setState({
            product_name : e.target.value
        });
    }

    onChangeQuantity(e) {
        this.setState({
            quantity : e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price : e.target.value
        });
    }

    onChangePromotional(e) {
        this.setState({
            promotional : e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image : e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description : e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            idCategory : e.target.value
        });
    }

    onChangeProductType(e) {
        this.setState({
            idProductType : e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        var file_data = $('#file').prop('files')[0];
        var type = file_data.type;
        var match = ["image/gif" , "image/png" , "image/jpg" , "image/jpeg"];
        var form_data = new FormData();
        if(type == match[0] || type == match[1] || type == match[2] || type == match[3]) {
            form_data.append('file', file_data);
            form_data.append('product_name', this.state.product_name);
            form_data.append('idCategory',this.state.idCategory );
            form_data.append('idProductType',this.state.idProductType);
            form_data.append('quantity',this.state.quantity);
            form_data.append('price',this.state.price);
            form_data.append('promotional',this.state.promotional);
            form_data.append('description',this.state.description);
            form_data.append('image', file_data.name);

        } else {
            this.setState({alert_message:'File khong dung dinh dang'});
        }

        console.log( file_data.name);
        axios.post('http://localhost:8000/admin/product/store', form_data)
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

                {this.state.alert_message=='success'?<SuccessAlert message={'Added successfully'} />:null}
                {this.state.alert_message=='error'?<ErrorAlert message={'Error occured while adding'} />:null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="product_name">Product Name</label>
                        <input type="text" className="form-control" id="product_name"
                        value={this.state.product_name} onChange={this.onChangeProductName} 
                        aria-describedby="emailHelp" placeholder="Enter product name" />
                        <br/>
                        <label for="quantity">Quantity</label>
                        <input type="number" className="form-control" id="quantity"
                        value={this.state.quantity} onChange={this.onChangeQuantity}
                        aria-describedby="emailHelp" placeholder="Enter quantity" />
                        <br/>
                        <label for="price">Price</label>
                        <input type="number" className="form-control" id="price"
                        value={this.state.price} onChange={this.onChangePrice}
                        aria-describedby="emailHelp" placeholder="Enter price" />
                        <br/>
                        <label for="promotional">Pomotional</label>
                        <input type="number" className="form-control" id="price"
                        value={this.state.promotional} onChange={this.onChangePromotional}
                        aria-describedby="emailHelp" placeholder="Enter promotional" />
                        <br/>
                        <label for="image">Image</label>
                        <input type="file" className="form-control" id="file" />
                        {/* value={this.state.image} onChange={this.onChangeImage} /> */}
                        <br/>
                        <label for="description">Description</label>
                        <textarea className="form-control" id="description"
                        value={this.state.description} onChange={this.onChangeDescription} />
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
                        <br/>
                        <label for="idProductType">Product Type</label>
                        <select className="form-control" id="idProductType"
                        value={this.state.idProductType} onChange={this.onChangeProductType}>
                            {
                                this.state.producttypes.map(producttype => {
                                    if (producttype.idCategory == this.state.idCategory){
                                        return (<option value={producttype.id}>{producttype.name}</option>);
                                    }
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
