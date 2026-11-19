import {CarteProduit} from '../carte_produit/carte_produit.js'

export class ListeProduit{
    constructor(produits){
        this.produits = produits
    }

    rendre(){
        const listeProduits = document.createElement("div")
        listeProduits.className = "liste_produits"
        
        this.produits.forEach(picture => {
            const produit = new CarteProduit(picture.id, picture.nom, picture.prix, picture.categorie, picture.url)
            listeProduits.append(produit.rendre())
        });

        return listeProduits
    }
}