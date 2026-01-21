
fetch("data.json")
  .then(res => res.json())
  .then(dados => {


dados.forEach(dados => {
  let nome = document.createElement('h3')
  let texto = document.createElement('p');
  let imagem = document.createElement('img');
  let div1 = document.createElement('div');
  let div2 = document.createElement('div');
  let div3 = document.createElement('div');
  let remove = document.createElement('button')
  let coiteiner = document.getElementById("main")

  div1.classList.add('item');
  coiteiner.appendChild(div1);

  div2.classList.add("info");

  let buttons = document.createElement("div")
  buttons.classList.add("buttons")

  div1.append(div2, buttons);
  imagem.src = dados.logo;
  imagem.classList.add("img-card");

  div2.append(imagem, div3);
  div3.classList.add("info-text")
  nome.innerText = dados.name;
  texto.classList.add("texto-card");
  texto.innerText = dados.description;
  div3.append(nome, texto);
  remove.classList.add('remove')
  remove.innerText = "remove";

  remove.addEventListener("click", function () {
    div1.remove()
  });

   
  let toggle = document.createElement("div");
  toggle.classList.add("toggle");
  let circle = document.createElement("div");
  circle.classList.add("circle");

  toggle.append(circle)
  buttons.append(remove, toggle)
   toggle.addEventListener("click", () => {
   toggle.classList.toggle("active");
  });


  let all = document.getElementById("All")
  let active = document.getElementById("Active")
  let inactive = document.getElementById("Inactive")

  all.addEventListener("click", () =>{
    div1.style.display = "block"
    all.style.backgroundColor = "hsl(3, 86%, 64%)"
    all.style.color = "hsl(225, 23%, 24%"
    active.style.backgroundColor = ""
    active.style.color = ""
    inactive.style.backgroundColor = ""
    inactive.style.color = ""
  })

  active.addEventListener("click", () =>{
    active.style.backgroundColor = "hsl(3, 86%, 64%)"
    active.style.color = "hsl(225, 23%, 24%)"
    all.style.backgroundColor = ""
    all.style.color = ""
    inactive.style.backgroundColor = ""
    inactive.style.color = ""
    if (toggle.classList.contains("active")){
      div1.style.display = "block"
    }else{
      div1.style.display = "none";
    }
  })

  inactive.addEventListener("click", () =>{
    inactive.style.backgroundColor = "hsl(3, 86%, 64%)"
    inactive.style.color = "hsl(225, 23%, 24%)"
    active.style.backgroundColor = ""
    active.style.color = ""
    all.style.backgroundColor = ""
    all.style.color = ""
    if (toggle.classList.contains("active")){
      div1.style.display = "none"
    }else{
      div1.style.display = "block";
    }
  })
   
});

  })
