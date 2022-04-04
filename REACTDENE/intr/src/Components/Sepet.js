import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';


class Sepet extends Component {
    renderSummary(){
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Adet</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.sepet.map(urun=>(
                                <tr key={urun.product.id}>
                                    <td>{urun.product.productName}</td>
                                    <td>{urun.product.unitPrice}</td>
                                    <td>{urun.quantity}</td>
                                    <td><Button onClick={()=>this.props.removeToSepet(urun.product)} color='danger'>Çıkar</Button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                    
                </Table>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.props.sepet.length>0?this.renderSummary():<div></div>}
            </div>
        );
    }
}

export default Sepet