
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
   div1.append(div2, remove);
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
    div1.style.display = "none"
   });
   


});

  })
