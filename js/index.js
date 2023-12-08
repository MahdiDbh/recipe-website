function aleatoire() {
  home = document.getElementById("homerec");
  let i = 0;
  x = Math.floor(Math.random() * 10);
  y = Math.floor(Math.random() * 10);
  z = Math.floor(Math.random() * 10);
  while (x == y || x == z || z == y) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    z = Math.floor(Math.random() * 10);
  }
  Array = [x, y, z];
  while (i < 3) {
    rd = Array[i];
    rd1 = Math.floor(Math.random() * 4) + 1;
    con = document.createElement("div");
    pic = document.createElement("div");
    txt = document.createElement("div");
    picr = document.createElement("img");
    con.setAttribute("class", "container");
    pic.setAttribute("class", "image-container");
    txt.setAttribute("class", "image-text");
    picr.setAttribute(
      "src",
      "../assets/recettes/" + recettesDB[rd].id + "/1.png"
    );
    pic.appendChild(picr);
    nom = document.createElement("a");
    nom.setAttribute("href", "details.html?recettes=" + recettesDB[rd].id);
    nom.innerHTML = recettesDB[rd].name;
    catg = document.createElement("h3");
    catg.innerHTML = recettesDB[rd].category;
    txt.appendChild(nom);
    txt.appendChild(catg);
    con.appendChild(txt);
    con.appendChild(pic);
    home.appendChild(con);
    i++;
  }
}
aleatoire();
/////////////////////////////////////////////////
const myBt=document.getElementById("bt");
myBt.addEventListener("click",function(){
  window.location.href="catalogue.html";
})
////////////////////////////////////////////////
var menu=document.querySelector('.fa-bars')
var ul=document.querySelector('nav ul')

document.addEventListener('scroll',()=>{
  ul.classList.add('responsive')
 })
menu.addEventListener('click',()=>{
 ul.classList.toggle('responsive')
})
/////////////////////////////////////////////////
const image = document.getElementById("im");
image.addEventListener("click", () => {
  // Redirect to the home page
  window.location.href =
    "index.html";
});
