export class ListeProduit{
    constructor(pictures){
        this.carteProduits = pictures
    }

    rendre(){
        let rendu = this.carteProduits.map(p => p.rendre()).join("")

        return `<div class="liste_produits">${rendu}</div>`
    }
}