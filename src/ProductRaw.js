import React from 'react';

export default class ProductRaw extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    let product = this.props.product;
    return (
          
                        <tr key ={product.id.toString()}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price} &euro;</td>
                            <td><img src={`/images/${product.name}.jpg`} width="50" height="50" /></td>
                            <td>
                                <button onClick={()=>this.props.showForm(product)}> modifier</button>
                                <button onClick={()=>this.props.deleteCallback(product.id)}>supprimer</button> {/*on recupere la propriete qui nous sert a faire l opperation  id ou name ou category */}
                            </td>
                        </tr>
         
    );
}
}