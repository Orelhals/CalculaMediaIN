document.getElementById("inNota").addEventListener("click", adicionarNota);
document
  .getElementById("calcularMedia")
  .addEventListener("click", calcularMedia);

function adicionarNota() {
  const notaAluno = document.getElementById("nota").value;
  const notaFormat = Number(notaAluno);
  console.log(notaFormat);

  if (!isNaN(notaFormat) && notaFormat >= 0 && notaFormat <= 10) {
    const lista = document.getElementById("listaNotas");
    const item = document.createElement("li");
    item.textContent = notaFormat;
    lista.appendChild(item);
    document.getElementById("nota").value = "";
  } else {
    alert("Digite um número entre 0 e 10");
  }
}

function calcularMedia() {
  const notas = document.querySelectorAll("#listaNotas li");
  soma = 0;
  media = 0;

  for (let i = 0; i < notas.length; i++) {
    soma += Number(notas[i].textContent);
  }

  media = soma / notas.length;
  const resultado = document.getElementById("resultado");
  resultado.textContent = `A média é: ${media}`;
}
