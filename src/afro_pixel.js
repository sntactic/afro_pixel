import { ListeProduit } from './liste_produit/liste_produit.js';

async function chargerDonnees() {
    try {
        const reponse = await fetch('../pictures.json');
        if (!reponse.ok) throw new Error(reponse.status);
        const donnees = await reponse.json();
        return donnees;
    } catch (err) {
        console.error('Chargement impossible :', err);
    }
}

const htmlBody = document.querySelector("body")

chargerDonnees().then(pictures => {
    const listProduits = new ListeProduit(pictures)
    htmlBody.append(listProduits.rendre())
});