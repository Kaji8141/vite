import {card} from "./assets/card";
import {player} from "./assets/player";
import "./style.css";
 
 
const signes:string[] = ["PIQUE", "CARREAU", "COEUR", "TREFLE"];
const valeurs:string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Valet", "Dame", "Roi","As"];
const deck:card[] = [];
 
for (const signe of signes) {
    for (const valeur of valeurs) {
        let carte:card = new card(signe, valeur);
        deck.push(carte)
    }
}

function shuffle(deck) {
    deck.sort(() => Math.random()-0.5);    
}
shuffle(deck);


const half = Math.ceil(deck.length / 2);

const firstHalf = deck.slice(0, half);
const secondHalf = deck.slice(half);

let turn = 0;
let score1 =0;
let score2 =0;

let pack1:HTMLElement = document.createElement("div");
pack1.classList.add('carton');
let cartInitiale = firstHalf[0]
pack1.textContent = cartInitiale.signe + cartInitiale.valeur;
document.body.appendChild(pack1);


let pack2:HTMLElement = document.createElement("div");
pack2.classList.add('carton');
let cartInitiale2 = secondHalf[0]
pack2.textContent = cartInitiale2.signe + cartInitiale2.valeur;
document.body.appendChild(pack2);



let emplacementscore1:HTMLElement = document.createElement("div");
emplacementscore1.classList.add('points');
let emplacementscore2:HTMLElement = document.createElement("div");
emplacementscore2.classList.add('points');


let fin:HTMLElement = document.createElement("div");
fin.classList.add('fin');


function addturn() {

    if (turn < 26) {
        let carte1 = firstHalf[turn];
        let carte2 = secondHalf[turn];

        pack1.textContent = carte1.signe + carte1.valeur;
        pack2.textContent = carte2.signe + carte2.valeur;

        const points1 = valeurs.indexOf(carte1.valeur);
        const points2 = valeurs.indexOf(carte2.valeur);

        if (points1 > points2) {
        score1++;      

        console.log(score1);
        } else if (points2 > points1) {
        score2++;    
        console.log(score2);
        } 

        emplacementscore1.textContent = score1;
        document.body.appendChild(emplacementscore1);

        emplacementscore2.textContent = score2;
        document.body.appendChild(emplacementscore2);

        turn++;

        console.log("turn",turn)
    } else{
            console.log("stop")   
        if (score1 > score2) {
            console.log("player 1 win")
            fin.textContent = "player 1 win"
            document.body.appendChild(fin);
        }   else {
                console.log("player 2 win")
                fin.textContent = "player 2 win"
                document.body.appendChild(fin);
            }
    }

}




document.addEventListener("click", addturn)




 
// créer 2 piles de cartes tirées au hasard
// a chaque tour on retourne une carte dans chaque tas
// on décide qui a gagné entre les deux cartes
// counter de points qui se cumulent a mesure de la partie
// quand ya plus de cartes -> on voit qui a gagné, message de felicitations
// bouton rejouer pour relancer 2 piles de cartes










