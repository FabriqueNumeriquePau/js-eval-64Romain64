// console.log("Go Chuck !");

/* ---------------------------------------------------
--                      ETAPE 1               --------
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
--                      ETAPE 2               --------
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
--                      ETAPE 3               --------
----------------------------------------------------*/

// let nav = document.querySelector("nav");
// let foot = document.querySelector("footer");


// class accueil {
//   constructor(nom, lien) {
//     this.nom = nom;
//     this.lien = lien;
//   }

//   getHTML = () => {
//     const lien = document.createElement("a");
//     lien.textContent = this.nom;
//     lien.href = this.lien;
//     return lien;
//   };
// }

// const promiseFetch = fetch("/data/menu.json");

// // console.log(promiseFetch);

// promiseFetch
//   .then((response) => response.json())
//   .then((data) => {
//     console.table(data.principal);
//     console.log(typeof data);
//     for (menu of data.principal) {
//       // le data.principal permet d'aller chercher les données dans le tableau "principal"
//       let menu1 = new accueil(menu.nom, menu.lien);
//       const affichage = menu1.getHTML();
//       nav.appendChild(affichage);
//     }
//     for (menu of data.pied) {
//       // le data.pied permet d'aller chercher les données dans le tableau "pied"
//       let menu2 = new accueil(menu.nom, menu.lien);
//       const affichage = menu2.getHTML();
//       foot.appendChild(affichage);
//     }
//     let sous = data.principal[1]; // [1] fait référence au tableau à l'intérieur du principal
//     // console.log(sous);
//     let art = nav.childNodes[1];
//     // console.log(art);
//     for (menu of sous.sousmenus) {
//       // le data.pied permet d'aller chercher les données dans le tableau "pied"
//       let menu3 = new accueil(menu.nom, menu.lien);
//       const affichage = menu3.getHTML();
//       affichage.className = "article";
//       art.appendChild(affichage);
//     }
//   });

/* --------------------------------------------------------------------------*/

let nav = document.querySelector("nav");
let foot = document.querySelector("footer");


class accueil {
  constructor(nom, lien) {
    this.nom = nom;
    this.lien = lien;
  }

// Création du MENU
  getMenu = () => {
    const li = document.createElement("li");
    const lien = document.createElement("a");
    lien.textContent = this.nom;
    lien.href = this.lien;
    li.appendChild(lien)
    const ul2 = document.createElement("ul");
    li.appendChild(ul2)
    return li;
  };

// Création du Sous-Menu
  getSousMenu = () => {
    const li = document.createElement("li");
    const lien = document.createElement("a");
    lien.textContent = this.nom;
    lien.href = this.lien;
    li.appendChild(lien)
    return li;
  };

// Création du pied de page
  getPied = () => {
    const lien = document.createElement("a");
    lien.textContent = this.nom;
    lien.href = this.lien;
    return lien;
}
}

const promiseFetch = fetch("./data/menu.json");
// console.log(promiseFetch);

promiseFetch
  .then((response) => response.json())
  .then((data) => {
    // console.table(data.principal);
    // console.log(typeof data);
    const ul = document.createElement("ul");
    nav.appendChild(ul)
    for (menu of data.principal) { // le data.principal permet d'aller chercher les données dans le tableau "principal"
      let menu1 = new accueil(menu.nom, menu.lien);
      const affichage = menu1.getMenu();
      ul.appendChild(affichage);
    }
    let sous = data.principal[1]; // [1] fait référence au tableau à l'intérieur du principal
    // console.log(sous);
    let art = nav.childNodes[0].children[1].children[1]; // Cible Nav -> 2ème ul -> li -> ul
    // console.log(art);
    for (menu of sous.sousmenus) {// le data.pied permet d'aller chercher les données dans le tableau "pied"
      let menu3 = new accueil(menu.nom, menu.lien);
      const affichage = menu3.getSousMenu();
      art.appendChild(affichage);
    }
    for (menu of data.pied) { // le data.pied permet d'aller chercher les données dans le tableau "pied"
      let menu3 = new accueil(menu.nom, menu.lien);
      const affichage = menu3.getPied();
      foot.appendChild(affichage);
    }
});