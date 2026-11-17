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

const liste_produits = document.querySelector("#liste_produits")

function creer_produit (picture){
    const carte = document.createElement("div")
    const image = document.createElement("img")
    const nom = document.createElement("div")
    const prix = document.createElement("div")
    const div_actions = document.createElement("div")
    const bouton_actions_plus = document.createElement("button")
    const bouton_actions_moins = document.createElement("button")

    prix.innerHTML = `${picture.prix} CFA`
    nom.innerHTML = picture.nom
    image.src = "../"+picture.url
    image.className = "image_produit"
    bouton_actions_plus.innerHTML = "+"
    bouton_actions_moins.innerHTML = "-"

    div_actions.className = "div_actions"
    div_actions.append(bouton_actions_plus, bouton_actions_moins)

    carte.className = "carte_produit"
    carte.append(image, nom, prix, div_actions)

    liste_produits.append(carte)
}

chargerDonnees().then(pictures => {
    pictures.forEach(picture => {
        creer_produit(picture)
    });
});