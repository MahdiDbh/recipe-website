const PARAMS = new URLSearchParams(window.location.search);
const id = PARAMS.get("recettes");
img1 = document.getElementById("i1");
img2 = document.getElementById("i2");
img3 = document.getElementById("i3");
img4 = document.getElementById("i4");
p1 = document.getElementById("p1");
p2 = document.getElementById("p2");
p3 = document.getElementById("p3");
p4 = document.getElementById("p4");
nomrec = document.getElementById("nomrec");
ingul = document.getElementById("ingul");
instrol = document.getElementById("instrol");
incul = document.getElementById("incul");

nomrec.innerText = " "+recettesDB[id - 1].name;
img1.setAttribute("src", "../assets/recettes/" + id + "/1.png");
img2.setAttribute("src", "../assets/recettes/" + id + "/2.png");
img3.setAttribute("src", "../assets/recettes/" + id + "/3.png");
img4.setAttribute("src", "../assets/recettes/" + id + "/4.png");
p1.innerText += " "+recettesDB[id - 1].category;
p2.innerText +=" "+ recettesDB[id - 1].country;
p3.innerText +=" "+ recettesDB[id - 1].duration;

for (let i = 0; i < recettesDB[id - 1].ingredients.length; i++) {
  rw = document.createElement("li");
  rw.innerText = recettesDB[id - 1].ingredients[i];
  ingul.appendChild(rw);
}
for (let i = 0; i < recettesDB[id - 1].instructions.length; i++) {
  rw = document.createElement("li");
  rw.innerText = recettesDB[id - 1].instructions[i];
  instrol.appendChild(rw);
}
cpt = 0;
for (let i = 0; i < recettesDB[id - 1].comments.length; i++) {
  rw = document.createElement("ul");
  r = document.createElement("li");
  rw1 = document.createElement("li");
  rw2 = document.createElement("li");
  rw2.setAttribute("class","noco")
  rw3 = document.createElement("li");
  rw3.setAttribute("class","noco")
  rw1.innerText = "Notre utilisateur : " + recettesDB[id - 1].comments[i].user;
  rw2.innerText = "Note : " + recettesDB[id - 1].comments[i].rating;
  rw3.innerText = "Commentaire : " + recettesDB[id - 1].comments[i].content;
  cpt += recettesDB[id - 1].comments[i].rating;
  rw.appendChild(rw1);
  rw.appendChild(rw2);
  rw.appendChild(rw3);
  r.appendChild(rw);
  incul.appendChild(r);
}
cpt = cpt / recettesDB[id - 1].comments.length;
p4.innerText += " "+cpt;

var menu = document.querySelector(".fa-bars");
var ul = document.querySelector("nav ul");

document.addEventListener("scroll", () => {
  ul.classList.add("responsive");
});
menu.addEventListener("click", () => {
  ul.classList.toggle("responsive");
});

const image = document.getElementById("im");
image.addEventListener("click", () => {
  // Redirect to the home page
  window.location.href =
    "index.html";
});
