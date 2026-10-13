export class card{
 
    signe:string;
    valeur:string;
 
 
    constructor(signe:string, valeur:string){
        // console.log("je suis " + valeur + " de " + signe);
 
        this.signe = signe;
        this.valeur = valeur;
 
        this.createCard();
    }
 
 
    createCard = ()=>{
        // console.log("creation de la carte");
 
        let rectangle:HTMLElement = document.createElement("div");
        rectangle.classList.add('carton');
        rectangle.id = "rectangleid";
 
 
        if (this.signe == "PIQUE"){
            this.signe = "♠️"
        };
 
        if (this.signe == "COEUR"){
            this.signe = "❤️"
        };
 
        if (this.signe == "CARREAU"){
            this.signe = "♦️"
        };
 
        if (this.signe == "TREFLE"){
            this.signe = "♣️"
        };
 
        rectangle.textContent = this.valeur + this.signe;
 
        
    }
}