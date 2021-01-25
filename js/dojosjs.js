// console.log("Go Chuck !");

/* ---------------------------------------------------
------------------------ EXO 1 -----------------------
----------------------------------------------------*/

let aside = document.querySelector("aside div");

// console.log(aside);

// Permet de changer le border-radius au passage de la souris sur l'image
aside.addEventListener("mouseover", function () {
  aside.style.borderRadius = "0%";
});

// Permet de changer le border-radius au sortie de la souris de l'image
aside.addEventListener("mouseout", function () {
  aside.style.borderRadius = "50%";
});

/* ---------------------------------------------------
------------------------ EXO 2 -----------------------
----------------------------------------------------*/

// let Arrow0 = document.querySelector("article:nth-child(1) > header ");
// let Arrow1 = document.querySelector("article:nth-child(2) > header ");
// let Arrow2 = document.querySelector("article:nth-child(3) > header ");

// Arrow0.addEventListener('click', function(e){
//     let Drop0 = document.querySelector("article:nth-child(1) > div");
//     if(Drop0.style.visibility == "hidden"){
//         Drop0.style.visibility ="visible";
//         Drop0.style.height = "auto";
//     }else{
//         Drop0.style.visibility = "hidden";
//         Drop0.style.height = "0";
//     }
// })

// Arrow1.addEventListener('click', function(e){
//     let Drop0 = document.querySelector("article:nth-child(2) > div");
//     if(Drop0.style.visibility == "hidden"){
//         Drop0.style.visibility ="visible";
//         Drop0.style.height = "auto";
//     }else{
//         Drop0.style.visibility = "hidden";
//         Drop0.style.height = "0";
//     }
// })

// Arrow2.addEventListener('click', function(e){
//     let Drop0 = document.querySelector("article:nth-child(3) > div");
//     if(Drop0.style.visibility == "hidden"){
//         Drop0.style.visibility ="visible";
//         Drop0.style.height = "auto";
//     }else{
//         Drop0.style.visibility = "hidden";
//         Drop0.style.height = "0";
//     }
// })

let arrows = document.getElementsByClassName("picto");

for (let i = 0; i < arrows.length; i++) {
  let arrow = arrows.item(i);
  console.log(arrow);
  arrow.addEventListener("click", () => {
    let arr = arrow.parentNode.nextElementSibling;
    if (arr.style.visibility == "hidden") {
      arr.style.visibility = "visible";
      arr.style.height = "auto";
    } else {
      arr.style.visibility = "hidden";
      arr.style.height = "0";
    }
  });
}


/* ---------------------------------------------------
------------------------ EXO 3 -----------------------
----------------------------------------------------*/

// class accueil{
//     constructor(principal, nom, lien, sousMenus){
//         this.principal = principal;
//         this.nom = nom;
//         this.lien = lien;
//         this.sousmenus = sousMenus;
//     }

//     getHTML = () => {
//     const titre = document.createElement('ul');
//     titre.appendChild(document.createTextNode(this.principal))
//     const nom = document.createElement('li');
//     nom.appendChild(document.createTextNode(this.nom))
//     titre.appendChild(nom)
//     const lien = document.createElement('a href');
//     lien.appendChild(document.createTextNode(this.lien))
//     titre.appendChild(lien)
//     const sousMenu = document.createElement('li');
//     sousMenu.appendChild(document.createTextNode(this.sousMenus))
//     titre.appendChild(sousMenu)
//     }
// }

// const promiseFetch = fetch("/data/menu.json");

// console.log(promiseFetch);

// promiseFetch
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         console.log(typeof data);
//         for(let menu of data){
//             const prin = new accueil(menu.principal, menu.nom, menu.lien, menu.sousmenus);
//             const affichage = prin.getHTML();
//             document.querySelector("nav").appendChild(affichage);
//         }
//     });
