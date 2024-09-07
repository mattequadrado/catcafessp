function pesquisar() {

  let section = document.getElementById("resultados-pesquisa");
  let inputPesquisa = document.getElementById("input-pesquisa").value

  console.log(inputPesquisa);

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  inputPesquisa = inputPesquisa.toLowerCase()

  // 3. Itera sobre cada elemento (dado) do array "dados".
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(inputPesquisa) || descricao.includes(inputPesquisa) || tags.includes(inputPesquisa)){
      resultados += `
        <div class="item-resultado">
          <h2>
            <a>${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }

    if(!inputPesquisa) {
      section.innerHTML = "busca vazia. por favor escreva algo!"
      return
    }

    if(!resultados){
      resultados = "<p> nada foi encontrado, tente outro cat café! </p>"
    }

  }
  section.innerHTML = resultados;
}