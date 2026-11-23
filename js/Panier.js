let produits_panier = []

export class Panier{
    rendre(){
        let rendu = ''
        for (const carteProduit of produits_panier) {
            rendu += carteProduit.rendre()
        }

        return `
            <h2>Panier</h2>
            <div class="liste_produits">${rendu}</div>
        `
    }

    ajouterPanier(produit){
        const existe = produits_panier.some(p => p.id === produit.id)
        if (existe) {
            alert("Produit déjà dans le panier")
            return
        }

        produits_panier.push(produit)
    }

    augmenterQuantite(id){
        const produit = produits_panier.find(p => p.id === id)
        produit.quantite += 1
    }

    diminuerQuantite(id){
        const produit = produits_panier.find(p => p.id === id)
        if(produit.quantite >1){
            produit.quantite -= 1
        }else{
            produits_panier.pop(produit)
        }
        
    }
}