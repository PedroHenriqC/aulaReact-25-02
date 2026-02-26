import React from 'react'
import '../CSS/Atividade6.css'

function Exercicio6() {
    function calcularTotal() {
        var produto = {nome: "Fertilizante", preco: 200 , imposto : 15};
        var resultado = document.getElementById("Valor-total");
        var total = produto.preco + (produto.preco + produto.imposto );
        resultado.innerText = `Total com Impostos :R$` + total;
    }
  return (
    <div className='card'>
      <h2>Financeiro</h2>
      <button onClick={calcularTotal}>Calcular Fatura</button>
      <p id="Valor-total"></p>
    </div>
  );
}

export default Exercicio6
