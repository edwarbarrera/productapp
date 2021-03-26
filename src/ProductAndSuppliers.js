import React from 'react';
import ProductDisplay from './ProductDisplay'

class ProductAndSuppliers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeComponent: "products"
        }
    }
    handleClick = (datatype) => {
        console.log("button clicked!" + datatype);
        this.setState({ activeComponent: datatype });
    }

    render() {
        return (
            <React.Fragment>
                <nav>
                    <button onClick={() => this.handleClick("products")}>Products</button>
                    <button onClick={() => this.handleClick("suppliers")}>Suppliers</button>
                </nav>
                <main>
                    {this.state.activeComponent === "products" ?
                        <div><ProductDisplay /></div> :
                        <div>Suppliers</div>
                    }
                </main>

            </React.Fragment>
        );
    }
}
export default ProductAndSuppliers;