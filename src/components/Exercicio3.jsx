import React from 'react'
import '../CSS/Atividade3.css'

function Exercicio3() {
    // Função para mostrar o resumo do animal
    function mostarIsumo() {
        let animal = {
            nome : "Gatinho👍🐱👍 ",
            foto : "https://placecats.com/300/300",
            Estoque : "Disponibilidade",
        };
        // Usando getElementById para acessar os elementos HTML e atualizar o conteúdo com os dados do animal
        let titulo = document.getElementById("NomeIsumo");
        let image = document.getElementById("Foto-Isumo");
        // Atualizando o texto do título e a fonte da imagem com os dados do animal
        titulo.innerText = animal.nome;
        image.src = animal.foto;
    }
  return (
    <div className='card'>
      <h2>Resultado Estoque</h2>
      {/* //Executando a função para mostrar o resumo do animal */}
      <button onClick={mostarIsumo}>Detalhes Insumo</button>
      
      <h3 id='NomeIsumo'></h3>
      <img id='Foto-Isumo' src='' alt='Foto do Insumo'/>
    </div>
  );
};

export default Exercicio3
