export class CarteProduit {
    constructor(id, nom, prix, categorie, url, quantite=1) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie = categorie;
        this.url = url;
        this.quantite = quantite
    }

    rendre(){
        return `
            <div class="shape_carte_produit">
                <img class="image_produit" src="${this.url}">
                <div>${this.nom}</div>
                <div>${this.prix} CFA</div>
                <div class="div_actions">
                    <button onclick="augmenterQuantite(${this.id})">+</button>
                    <span>${this.quantite}</span>
                    <button onclick="diminuerQuantite(${this.id})">-</button>
                </div>
                <button
                    onclick="ajouterPanier(${this.id}, '${this.nom}', ${this.prix}, '${this.categorie}', '${this.url}')"
                    class="ajouter_panier">
                    Ajouter Au Panier
                </button>
            </div>
        `
    }
}