import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Product from "./Components/Product";
import Sepet from "./Components/Sepet";
import alertify from "alertifyjs";

class App extends Component {
  state = {
    current: "",
    products: [],
    sepet: [],
  };

  componentDidMount() {
    this.getAllProduct();
  }

  currentCategory = (category) => {
    this.setState({ current: category.categoryName });
    this.getAllProduct(category.id);
  };

  AddToSepet = (product) => {
    let sepetRef = this.state.sepet;
    let urun = sepetRef.find((x) => x.product.id === product.id);
    if (urun != null) {
      urun.quantity += 1;
    } else {
      sepetRef.push({ product: product, quantity: 1 });
    }
    this.setState({ sepet: sepetRef });
    alertify.success(product.productName+" Eklendi");
  };

  removeToSepet = (product) => {
    let find= this.state.sepet.find(x=>x.product.id===product.id)
    
    if(find.quantity>1){
      find.quantity-=1
      this.setState(this.state.sepet)
    }
    else{
      let producta = this.state.sepet.filter((x) => x.product.id !== product.id);
      this.setState({sepet:producta})
    }
    
    
    alertify.error(product.productName+" Çıkarıldı");
  };

  getAllProduct = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId != null) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Sepet
                removeToSepet={this.removeToSepet}
                sepet={this.state.sepet}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.currentCategory}
                current={this.state.current}
              />
            </Col>
            <Col xs="9">
              <Product
                AddToSepet={this.AddToSepet}
                getAllProduct={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
