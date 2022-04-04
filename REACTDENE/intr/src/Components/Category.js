import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Category extends Component {
  state = {
    categories: [],
  };
  componentDidMount(){
      this.getCategories();
  }
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  render() {
    return (
      <div>
        <h2>Category</h2>
        <ListGroup>
            {
                this.state.categories.map(x=>(
                    <ListGroupItem onClick={()=>this.props.currentCategory(x)} key={x.id}>{x.categoryName}</ListGroupItem>
                ))
            }
         
        </ListGroup>
        <h2>{this.props.current}</h2>
      </div>
    );
  }
}

export default Category;
