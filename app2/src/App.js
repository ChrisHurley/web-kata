import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        products: data.products,
        newName: "",
        newDescription: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit(event) {
    console.log('A product was submitted: ', this.state.newName, this.state.newDescription);
    const newProduct = {
        name: this.state.newName,
        description: this.state.newDescription
      };
    const newProducts = Array.from(this.state.products);
    newProducts.unshift(newProduct);
    this.setState({ 
      products: newProducts,
      newName: "",
      newDescription: ""
    });
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleRemove(event, name) {
    console.log("Removing it", name);
    const newProducts = Array.from(this.state.products.filter((p) => p.name !== name));
    this.setState({ 
      products: newProducts
    });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Product name:
            <input type="text" name="newName" value={this.state.newName} onChange={this.handleInputChange}/>
          </label>
          <label>
            Product description:
            <input type="text" name="newDescription" value={this.state.newDescription}
              onChange={this.handleInputChange}/>
          </label>
          <input type="submit"/>
      </form>
        
      
      </div>
      <div className='products-container'>
        <Products products={this.state.products} removeHandler={this.handleRemove}/>
      </div>
    </div>
  }
}

export default App
