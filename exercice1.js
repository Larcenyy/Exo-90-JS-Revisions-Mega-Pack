myDiv = document.getElementById("demo");

myDiv2 = document.getElementById("demoRetour");
monBoutton = document.getElementById("monBoutton");


changeSurOver = document.getElementById("changeSurOver");

let nomVoiture = "Peugeot"
let x = 50
let z = 5;
let w = 10;
let result = z + w;

let d = result;


// let k = 5, l = 10 + k;
// console.log(l)

let maFonction = "Salut tout le monde !"
alert(maFonction)

myDiv.innerHTML = "z vaux : " + z + " w vaux : " + w + " le résultat est : " + result;
alert(d);

let prenom = "John",
    nom = "Doe",
    age = 35;

alert("Multiplications : "  + 10 * 5);

alert("Division : "  + 10 / 2);


function maFonctionDeRetour() {
    myDiv2.innerHTML = "BONJOUR"
}

function color() {
    changeSurOver.style.backgroundColor = "red"
    changeSurOver.style.width = "10rem"
}

monBoutton.addEventListener("click", function (){

})

changeSurOver.addEventListener("mouseover", function (){
    color()
})

let txt = "une longue phrase"
let longueur = txt.length
alert(longueur)

let str1 = "Bonjour"
let str2 = str1.concat("le monde")
alert(str2)

let listeVoitures = ["Renault","Volvo","Citroen"]
let maVoiture = listeVoitures[1];
alert(maVoiture)
console.log(listeVoitures)

listeVoitures.splice(1, 1, "ford")

alert(listeVoitures.length)
listeVoitures.pop()
listeVoitures.push("Ferrari");

let rNumber = Math.floor(Math.random() * 50)
let fNumber = 5.7;
parseInt(fNumber)

let  nombreUn = 10
let nombreDeux  = 5


if(nombreUn > nombreDeux){
    alert("nombreUn est supérieur à nombreDeux")
}

let nombreTrois = 10
let nombreQuatre = 10


if(nombreTrois === nombreQuatre){
    alert("nombreTrois est égal à nombreQuatre")
}

if(nombreUn !== nombreDeux){
    alert("nombreUn n'est pas égal à nombreDeux")
}

for(let i = 0; i < 10; i++){
    console.log([i])
}

let fruits = ["pomme","banane","poire"]


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    while(i < 10){

    }
    while(i < 10){
        i+=2;
    }
    while(i === 5){
        alert("oui")
    }
}

