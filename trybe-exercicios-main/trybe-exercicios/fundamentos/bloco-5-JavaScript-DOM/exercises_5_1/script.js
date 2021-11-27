let titleAdm = document.querySelector("h1");
titleAdm.style.backgroundColor = "green";
titleAdm.style.textAlign = "center";
titleAdm.style.padding = "10px";

let infDivEsque = document.querySelectorAll(".emergency-tasks div");
infDivEsque[0].style.backgroundColor = "purple";
infDivEsque[1].style.backgroundColor = "purple"; 



let infDivDireita = document.querySelectorAll(".no-emergency-tasks div");
infDivDireita[0].style.backgroundColor = "black";
infDivDireita[1].style.backgroundColor = "black";


let tagBody = document.querySelectorAll("body");
for(let b of tagBody){
    b.style.color = "white";
}
let trybeCoppy = document.querySelector("#footer-container div");
trybeCoppy.style.backgroundColor = "green";
trybeCoppy.style.padding = "10px";
trybeCoppy.style.textAlign = "center";

let selcDireita = document.querySelector(".no-emergency-tasks");
selcDireita.style.backgroundColor = "Khaki";
selcDireita.style.width = "40%"

selcDireita.style.display = "inline-block";

let selcEsquerda = document.querySelector(".emergency-tasks");
selcEsquerda.style.backgroundColor = "Salmon";
selcEsquerda.style.width = "40%"

selcEsquerda.style.display = "inline-block";



