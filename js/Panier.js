import { ListeProduit } from './ListeProduit.js'

export class Panier{
    constructor(){
        this.produits_panier = []
    }
    
    rendre(){
        const liste_produits_panier = new ListeProduit(this.produits_panier)

        const total = this.produits_panier.map(p => p.prix * p.quantite).reduce((a,b)=>a+b, 0)
        return `
            <h2>Panier : Total : ${total} CFA</h2>
            ${liste_produits_panier.rendre()}
        `
    }

    ajouterPanier(produit){
        console.log(produit)
        const existe = this.produits_panier.some(p => p.id === produit.id)
        if (existe) {
            alert("Produit déjà dans le panier")
            return
        }

        this.produits_panier.push(produit)
    }

    augmenterQuantite(id){
        const produit = this.produits_panier.find(p => p.id === id)
        produit.quantite += 1
    }

    diminuerQuantite(id){
        const produit = this.produits_panier.find(p => p.id === id)
        if(produit.quantite >1){
            produit.quantite -= 1
        }else{
            this.produits_panier.pop(produit)
        }
    }
}