import { CarteProduit } from "./CarteProduit.js"

export class ListeProduit{
    constructor(pictures){
        this.carteProduits = pictures
    }

    rendre(){
        let rendu = ''
        for (const carteProduit of this.carteProduits) {
            rendu += carteProduit.rendre()
        }

        return rendu
    }
}