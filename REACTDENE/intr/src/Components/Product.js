import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class Product extends Component {
  render() {
    return (
      <div>
        <h2>Product</h2>
        <Table>
          <thead>
            <tr>
              <th>ProductName</th>
              <th>Unit Price</th>
              <th>Category Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.getAllProduct.map((product) => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.categoryId}</td>
                <td><Button onClick={()=>this.props.AddToSepet(product)} color="primary">Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Product;
