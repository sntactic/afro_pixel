export class CarteProduit {
    constructor(id, nom, prix, categorie, url) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
    }

    rendre(){
        const carte = document.createElement("div")
        carte.className = "shape_carte_produit"

        carte.innerHTML = `
            <img class="image_produit" src="../${this.url}">
            <div>${this.nom}</div>
            <div>${this.prix} CFA</div>
            <div class="div_actions">
                <button>+</button>
                <button>-</button>
            </div>
        `
        
        return carte
    }
}
