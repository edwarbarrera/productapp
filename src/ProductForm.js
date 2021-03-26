import React from 'react';
export default class ProductForm extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            id : props.product.id || "",
            name : props.product.name || "",
            category : props.product.category || "",
            price : props.product.price || ""
        }
    }
    handleChange = (evt)=>{
        //console.log(evt);
        evt.persist();
        let field =evt.target.name;
        let value=evt.target.value;
        this.setState((state)=>state[field]=value);
         // this.setState((state)=>state[evt.target.name] = evt.target.value)


    }
    save = (evt)=>{
        evt.preventDefault();//on desactive l action par defaut du navigateur pour l evenement onclick de bouton de formulaire
        let product ={
            id : this.state.id,
            name : this.state.name,
            category:this.state.category,
            price : this.state.price
        }
        this.props.saveCallback(product);
    }
    
 
            render(){
                return(
                  
                  <form>
                    <input type="text" name="id" value={this.state.id} placeholder="id" readOnly/>{/*value  avec le statte du this product permet de preremplir le formulaire*/}
                    <input type="text" name="name" value={this.state.name} placeholder="nom" onChange={this.handleChange}/>
                    <input type="text" name="category" value={this.state.category} placeholder="catégorie" onChange={this.handleChange}/>
                    <input type="number" name="price" value={this.state.price} placeholder="Prix" onChange={this.handleChange}/>
                    <button onClick={this.save}>Enregistrer</button>
                    <button onClick={this.props.cancelCallback}>Annuler</button>
                  </form>
                  
        );
    }
}