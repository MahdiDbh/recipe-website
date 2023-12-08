function cree(i) {
  con = document.createElement("div");
  pic = document.createElement("div");
  txt = document.createElement("div");
  picr = document.createElement("img");
  rd = Math.floor(Math.random() * 4) + 1;
  picr.setAttribute(
    "src",
    "../assets/recettes/" + recettesDB[i].id + "/" + rd + ".png"
  );
  pic.appendChild(picr);
  nom = document.createElement("a");
  nom.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);
  nom.innerHTML = "Nom : " + recettesDB[i].name;
  catg = document.createElement("h2");
  catg.innerHTML = "categorie :" + recettesDB[i].category;
  pays = document.createElement("h3");
  pays.innerHTML = "country : " + recettesDB[i].country;
  dur = document.createElement("h3");
  dur.innerHTML = "duration :" + recettesDB[i].duration;
  note = document.createElement("h3");
  let somme = 0;
  for (let j = 0; j < recettesDB[i].comments.length; j++) {
    somme = somme + recettesDB[i].comments[j].rating;
  }
  somme = somme / recettesDB[i].comments.length;
  note.innerHTML = "note : " + somme;
  bt = document.createElement("button");
  bta = document.createElement("a");
  bta.innerHTML = "voir plus de détails";
  bta.setAttribute("href", "details.html?recettes=" + recettesDB[i].id);

  txt.appendChild(nom);
  txt.appendChild(catg);
  txt.appendChild(pays);
  txt.appendChild(dur);
  txt.appendChild(note);
  bt.appendChild(bta);
  txt.appendChild(bt);
  txt.setAttribute("class", "txt");
  con.appendChild(txt);
  con.appendChild(pic);
  recc.appendChild(con);
  con.setAttribute("class", "con");
}
function afficherRec() {
  catalogue = document.getElementById("recc");
  for (let i = 0; i < recettesDB.length; i++) {
    cree(i);
  }
}

function rechercheCtg() {
  catalogue = document.getElementById("recc");
  catalogue.innerHTML = "";
  catSelec = document.getElementById("cat-selc").value;
  let v = false;
  for (let i = 0; i < recettesDB.length; i++) {
    capt = recettesDB[i].category;
    if (capt == catSelec) {
      cree(i);
      v = true;
    }
  }
  if (v == false) {
    for (let i = 0; i < recettesDB.length; i++) {
      cree(i);
    }
  }
}

var sea = document.getElementById("sea");

sea.addEventListener("input", () => {
  catalogue = document.getElementById("recc");
  catalogue.innerHTML = "";
  for (let i = 0; i < recettesDB.length; i++) {
    var capt = recettesDB[i].name.toLowerCase();
    if (capt.includes(sea.value.toLowerCase())) {
      cree(i);
    }
  }
});
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
