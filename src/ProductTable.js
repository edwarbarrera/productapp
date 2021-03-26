import React from 'react';
import ProductRaw from './ProductRaw';


export default class ProductTable extends React.Component {
    
  
      render() {
        return (
            <React.Fragment>
                <table className="table">
                    <caption> Produits </caption>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Categorie</th>
                        <th>Prix</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    {this.props.products.map( (product)=> {
                        return (
                           <ProductRaw  key ={product.id.toString()} product={product} showForm={this.props.showForm} deleteCallBack={this.props.deleteCallBack}/>
                        );
                    })}
                </table>
                <button onClick={()=>this.props.showForm({})}> creer produit</button>
            </React.Fragment>
        );
    }
    


}