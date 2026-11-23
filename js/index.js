import pictures from "../pictures.json" with {type: "json"};
import { CarteProduit } from "./CarteProduit.js";
import { ListeProduit } from "./ListeProduit.js";
import { Panier } from "./Panier.js";


//Gestion du catalogue des produits
let carte_produits = pictures.map(p => new CarteProduit(p.id, p.nom, p.prix, p.categorie, p.url))
const liste_produits = new ListeProduit(carte_produits)
document.querySelector("#catalogue").innerHTML = liste_produits.rendre()

//Gestion du panier
const buton_panier = document.getElementById("logo")
const panier_div = document.querySelector(".panier")
const PANIER = new Panier()

function metteAJourPanier(){
    panier_div.innerHTML = PANIER.rendre()
}

buton_panier.addEventListener("click", ()=>{
    metteAJourPanier()
    panier_div.classList.toggle("masquer")
});

function ajouterPanier(id, nom, prix, categorie, url){
    const produit = new CarteProduit(id, nom, prix, categorie, url)
    PANIER.ajouterPanier(produit)
    metteAJourPanier()
}window.ajouterPanier = ajouterPanier;

function augmenterQuantite(id){
    PANIER.augmenterQuantite(id)
    metteAJourPanier()
}window.augmenterQuantite = augmenterQuantite;

function diminuerQuantite(id){
    PANIER.diminuerQuantite(id)
    metteAJourPanier()
}window.diminuerQuantite = diminuerQuantite;