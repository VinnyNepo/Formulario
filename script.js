function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email); 
}

function validatel(telefone){
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
}
function mascaraData() {
  const nascimento = document.querySelector("#nascimento");
  nascimento.value = nascimento.value.replace(/\D/g, ""); // permite inserir somente números
  nascimento.value = nascimento.value.replace(
    /(\d{2})(\d{2})(\d{4})/,
    "$1/$2/$3"
  );
}
function validarData() {
  const nascimento = document.querySelector("#nascimento");
  const data = nascimento.value.split("/");
  const dia = parseInt(data[0]);
  const mes = parseInt(data[1]);
  const ano = parseInt(data[2]);
  if (
    dia > 0 &&
    dia <= 31 &&
    mes > 0 &&
    mes <= 12 &&
    ano > 1900 &&
    ano < 2024
  ) {
    return true;
  }}
document.getElementById('enviarBtn').addEventListener('click', function () {
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();
    const observacoes = document.getElementById('observacoes').value.trim();

    // Valida se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !telefone || !nascimento) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Valida o formato do e-mail
    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }
    // Valida o formato do e-mail
    if (!validatel(telefone)) {
        alert('Por favor, insira telefone válido!');
        return;
    }
    if (!validarData(telefone)) {
        alert('Por favor, insira uma data válido!');
        return;
    }
    // Cria uma nova linha na tabela
    const tabelaBody = document.getElementById('tabela').querySelector('tbody');
    const novaLinha = tabelaBody.insertRow();

    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = email;
    novaLinha.insertCell().textContent = telefone;
    novaLinha.insertCell().textContent = nascimento;
    novaLinha.insertCell().textContent = observacoes;

    // Esconde o formulário e exibe a tabela
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('tabela-container').style.display = 'block';
});
document.getElementById('voltarbnt').addEventListener('click', function () {
    console.log('Botão voltar clicado');
    document.getElementById('tabela-container').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
});