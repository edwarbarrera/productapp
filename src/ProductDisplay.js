import React from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';



export default class ProductDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            netWorkError:false,
            startEditing: false,
            product: {},
            productId: 100,
            products: []

        }
    }
    deleteProduct = (productId) => {// on nome lapropriete comme on veut nom logique productId =2 => products =[1,3] le produits 2 est supprimé
        fetch(`http://localhost:3500/api/products/${productId}`, {
            method: "DELETE", /*requete pour SUPPRIMER*/

        }).then((data) => data.json)
            .then((res) => this.setState(
                {
                    products:
                        this.state.products.filter((product) => product.id !== productId)
                }
            ))
    }

    showForm = (product) => {
        this.setState({ startEditing: true, product: product });

    }
    cancel = () => {
        this.setState({ startEditing: false, product: {} });
    }
    save = (product) => {// ajoute d un nouveau produit
        if (!product.id) {
            //product.id = this.state.productId;
            fetch("http://localhost:3500/api/products", {
                method: "POST", /*requete pour ajouter*/
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(product)/* resource a ajouter*/

            })
                .then((data) => data.json())
                .then(
                    (res) => {
                        this.setState({
                            products: this.state.products.concat(res),
                            //productId: this.state.productId + 1, valable pour les versions avnt le serveur sera traité directement par le serveur 
                            startEditing: false
                        }
                        );
                        console.log(res)
                    }
                )
        }
        else {
            fetch(`http://localhost:3500/api/products/${product.id}`, {
                method: "PUT", /*requete pour modfier*/
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(product)/* resource a ajouter*/
            })
                .then((data) => data.json())
                .then((res) => this.setState(
                    {
                        products: this.state.products.map((p) => p.id === product.id ? res : p),
                        startEditing: false
                    }
                ))
        } /** si le product est modifie on garde product sinon on garde p */
    }

    render() {
        if (this.state.netWorkError) {return <p>probleme de conexion!</p>}
         else {
        return  this.state.startEditing
                    ?
                    <ProductForm product={this.state.product} cancelCallback={this.cancel}
                        saveCallback={this.save} />
                    :
                    <ProductTable products={this.state.products} showForm={this.showForm} deleteCallback={this.deleteProduct} />
          
        }
    }

    componentDidMount = () => {
        let promesse = fetch("http://localhost:3500/api/products");
        promesse.then((data) => {
            console.log(data);
            return data.json()
        }).then((res) => {
            console.log(res);
            this.setState({ products: res })
        })


            .catch((err) => {
                console.log(err)
                this.setState({ netWorkError: true })
            })
    }
}

