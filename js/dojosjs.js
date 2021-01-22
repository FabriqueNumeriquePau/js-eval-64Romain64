// console.log("Go Chuck !");

/* ---------------------------------------------------
------------------------ EXO 1 -----------------------
----------------------------------------------------*/

let aside = document.querySelector("aside div");

// console.log(aside);

// Permet de changer le border-radius au passage de la souris sur l'image
aside.addEventListener("mouseover", function(){
    aside.style.borderRadius = "0%";
});

// Permet de changer le border-radius au sortie de la souris de l'image
aside.addEventListener("mouseout", function(){
    aside.style.borderRadius = "50%";
});


/* ---------------------------------------------------
------------------------ EXO 2 -----------------------
----------------------------------------------------*/

let Arrow0 = document.querySelector("article:nth-child(1) > header > img");
let Arrow1 = document.querySelector("article:nth-child(2) > header > img");
let Arrow2 = document.querySelector("article:nth-child(3) > header > img");


Arrow0.addEventListener('click', function(e){
    let Drop0 = document.querySelector("article:nth-child(1) > div");
    if(Drop0.style.visibility == "hidden"){
        Drop0.style.visibility ="visible";
        Drop0.style.height = "auto";
    }else{
        Drop0.style.visibility = "hidden";
        Drop0.style.height = "0";
    }
})

Arrow1.addEventListener('click', function(e){
    let Drop0 = document.querySelector("article:nth-child(2) > div");
    if(Drop0.style.visibility == "hidden"){
        Drop0.style.visibility ="visible";
        Drop0.style.height = "auto";
    }else{
        Drop0.style.visibility = "hidden";
        Drop0.style.height = "0";
    }
})

Arrow2.addEventListener('click', function(e){
    let Drop0 = document.querySelector("article:nth-child(3) > div");
    if(Drop0.style.visibility == "hidden"){
        Drop0.style.visibility ="visible";
        Drop0.style.height = "auto";
    }else{
        Drop0.style.visibility = "hidden";
        Drop0.style.height = "0";
    } 
})

// let arrow = document.querySelectorAll("header img");
// let div = document.querySelectorAll('article div');

// console.log(arrow)
// console.log(div)

// div.forEach((e) =>{
//     let response = e.innerHTML;
//     console.log(response)
// })

// arrow.forEach((e) =>{
//     e.addEventListener('click', ()=>{
//         let div = document.querySelector("article header")
//         let response = div.nextElementSibling.innerHTML
//         console.log(response)
//     })
// })

/* ---------------------------------------------------
------------------------ EXO 3 -----------------------
----------------------------------------------------*/

class principal{
    constructor(nom, lien, sousmenus){
        this.nom = nom;
        this.lien = lien;
        this.sousmenus = sousmenus;
    }

    getHTML = () => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(this.nom));
    ul.appendChild(li);
    const a = document.createElement('a href="#"');
    a.appendChild(document.createTextNode(this.lien));
    li.appendChild(a)
    const li2 = document.createElement('li');
    li2.appendChild(document.createTextNode(this.sousmenus));
    ul.appendChild(li2);
    return ul
    }
}

const promiseFetch = fetch("/data/menu.json");

console.log(promiseFetch);

promiseFetch
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(typeof data);
        for(let menu of data){
            const prin = new principal(menu.nom, menu.lien, menu.sousmenus);
            const affichage = prin.getHTML();
            document.querySelector("nav").appendChild(affichage);
        }
    });