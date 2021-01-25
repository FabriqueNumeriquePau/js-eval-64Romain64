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



let nav = document.querySelector("nav");
let foot = document.querySelector("footer");


console.log(art);

class accueil{
    constructor(nom, lien){
        this.nom = nom;
        this.lien = lien;
    }

    getHTML = () => {
        const lien = document.createElement("a");
        lien.textContent = this.nom;
        lien.href = this.lien;
        return lien;
    }
};

const promiseFetch = fetch("/data/menu.json");

console.log(promiseFetch);

promiseFetch
    .then(response => response.json())
    .then(data => {
        console.table(data)
        console.log(typeof data);
        for (menu of data.principal){
            let menu1 = new accueil(menu.nom, menu.lien);
            const affichage = menu1.getHTML();
            nav.appendChild(affichage);
        }
        for (menu of data.pied){
            let menu2 = new accueil(menu.nom, menu.lien);
            const affichage = menu2.getHTML();
            foot.appendChild(affichage);
        }
    });





















































    // const titre = document.createElement('ul');
    // titre.appendChild(document.createTextNode(this.principal))
    // const nom = document.createElement('li');
    // nom.appendChild(document.createTextNode(this.nom))
    // titre.appendChild(nom)
    // const lien = document.createElement('a href');
    // lien.appendChild(document.createTextNode(this.lien))
    // titre.appendChild(lien)
    // const sousMenu = document.createElement('li');
    // sousMenu.appendChild(document.createTextNode(this.sousMenus))
    // titre.appendChild(sousMenu)
    //}

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
