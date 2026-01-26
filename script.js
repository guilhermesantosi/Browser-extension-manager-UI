
let whiteOrBlack = true;

class Item {
 constructor (name, logo, description, ativo){
  this.name = name;
  this.logo = logo;
  this.description = description;
  this.active = ativo
 }

 render() {

  let div = document.createElement("div");
  div.classList.add("item")
  const classeAtiva = this.active ? "active" : "";
  div.innerHTML = `
    <div class="info">
    <img class="img-card" src="${this.logo}" alt="">
    <div class="info-text"><h3 class="h3">${this.name}</h3><p class="texto-card">${this.description}</p></div>
    </div>
    <div class="buttons">
    <button class="remove" onclick="remove(this)">remove</button>
    <div onclick="alternadorStatus(this)" class="toggle 
    ${classeAtiva}"><div class="circle"</div>
    </div>
  `
  return div;
 }
} 

const fetchJson = async () =>{
  try{
    let response = await fetch("data.json")
    if (!response.ok){
      throw new Error("dados não encontrado")
    }
    data =  await response.json()
    return data;
  }catch (err){
    console.error(err)
    return err;
  }
}

async function carregarDados() {
  const data = await fetchJson();
  return data
}

function criarCard(obj) {
  return new Item(
      obj.name,
      obj.logo,
      obj.description,
      obj.isActive
  ).render();
}



const iniciar = async () =>{
  const data = await carregarDados();
  data.forEach(dados => {
    
  const main = document.getElementById("main")
  main.append(criarCard(dados))
  });
}

iniciar()

let status = {};

function alternadorStatus(event){
  
  const nomeDoItem = event.closest(".item").querySelector("h3").innerText;
  status[nomeDoItem] = event.classList.contains("active")
  
  if(event.classList.contains("active")){
    event.classList.remove("active")
  }else{
    event.classList.add("active")
  }
  
}

function remove(event){
  event.closest(".item").remove();
}

let all = document.getElementById("All");
let active = document.getElementById("Active")
let inactive = document.getElementById("Inactive")


let appColor = document.getElementById("color-app");
appColor.addEventListener("click", () =>{
  let divs = document.querySelectorAll(".item");
  let h3 = document.querySelectorAll("h3");
  let h1 = document.getElementById("h1")
  let description = document.querySelectorAll(".texto-card")
  let remove = document.querySelectorAll(".remove")
  const imgColorApp = document.getElementById("color-app-img")
  const li = document.querySelectorAll("li")
  const body = document.body
  const header = document.querySelector("header")
  if (imgColorApp.getAttribute("src") === "assets/images/icon-sun.svg"){

    imgColorApp.src = "assets/images/icon-moon.svg";

    divs.forEach(item =>{
      item.style.backgroundColor = "hsl(200, 60%, 99%)"
    })
    h3.forEach(texto =>{
      texto.style.color = "black"
    })
    remove.forEach( buttons =>{
      buttons.style.backgroundColor = "hsl(200, 60%, 99%)"
      buttons.style.color = "black"
    })
    description.forEach( texto =>{
      texto.style.color = "hsl(226, 11%, 37%)"
    })

    body.style.backgroundImage = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
    h1.style.color = "hsl(226, 11%, 37%)"
    header.style.backgroundColor = "hsl(200, 60%, 99%)"
    appColor.style.backgroundColor = "hsl(0, 0%, 93%)"
    li.forEach(lista => {
      lista.style.backgroundColor = "hsl(200, 60%, 99%)"
      lista.style.color = "hsl(226, 11%, 37%)"
    })
  }else{
    imgColorApp.src = "assets/images/icon-sun.svg";

    divs.forEach(item =>{
      item.style.backgroundColor = ""
    })
    h3.forEach(texto =>{
      texto.style.color = ""
    })
    remove.forEach( buttons =>{
      buttons.style.backgroundColor = ""
      buttons.style.color = ""
    })
    description.forEach( texto =>{
      texto.style.color = ""
    })

    body.style.backgroundImage = "";
    h1.style.color = ""
    header.style.backgroundColor = ""
    appColor.style.backgroundColor = ""
    li.forEach(lista => {
      lista.style.backgroundColor = ""
      lista.style.color = ""
    })
  }

})

all.style.backgroundColor = "hsl(3, 86%, 64%)"
all.style.color = "hsl(225, 23%, 24%"

all.addEventListener("click", () =>{

  let divs = document.querySelectorAll(".item")
  divs.forEach(card =>{
    card.style.display = "block";
  })
  all.style.backgroundColor = "hsl(3, 86%, 64%)"
  all.style.color = "hsl(225, 23%, 24%"
  active.style.backgroundColor = ""
  active.style.color = ""
  inactive.style.backgroundColor = ""
  inactive.style.color = ""
  
})

active.addEventListener("click", () =>{

  let divs = document.querySelectorAll(".item")
  divs.forEach(card =>{
    const toggle = card.querySelector('.toggle')
    if (!toggle.classList.contains('active')) {
      card.style.display = "none" 
    }else{
      card.style.display = "block"
    }
  })
  all.style.backgroundColor = ""
  all.style.color = ""
  active.style.backgroundColor = "hsl(3, 86%, 64%)"
  active.style.color = "hsl(225, 23%, 24%"
  inactive.style.backgroundColor = ""
  inactive.style.color = ""
  
})

inactive.addEventListener("click", () =>{

  let divs = document.querySelectorAll(".item")
  divs.forEach(card =>{
    const toggle = card.querySelector('.toggle')
    if (toggle.classList.contains('active')) {
      card.style.display = "none" 
    }else{
      card.style.display = "block" 
    }
  })
  all.style.backgroundColor = ""
  all.style.color = ""
  active.style.backgroundColor = ""
  active.style.color = ""
  inactive.style.backgroundColor = "hsl(3, 86%, 64%)"
  inactive.style.color = "hsl(225, 23%, 24%"
  
})

