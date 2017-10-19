import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    constructor(props){
        super(props)
        this.state= { expanded: false }
      }

    toggleExpanded = (evt) => {
        evt.preventDefault();
        this.setState((currentState) => { 
            return { expanded: !currentState.expanded }
         });
    }

    render(){
        return <div className='product'>
            <div>
                <a href='#' onClick={this.toggleExpanded}>
                    { this.state.expanded ? '-' : '+' }
                </a>
            </div>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                 { this.state.expanded && <div className='desc'>{this.props.product.description}</div> }
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-' + p.name }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products