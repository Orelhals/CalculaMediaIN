document.getElementById("inNota").addEventListener("click", adicionarNota);

function adicionarNota() {
  const notaAluno = document.getElementById("nota").value;
  const notaFormat = Number(notaAluno);
  console.log(notaFormat);
}
