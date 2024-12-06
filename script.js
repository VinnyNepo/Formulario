function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); 
}

function validatel(telefone){
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);

}
document.getElementById('enviarBtn').addEventListener('click', function () {
    // Captura os valores do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const observacoes = document.getElementById('observacoes').value.trim();

    // Valida se todos os campos obrigatórios foram preenchidos
    if (!nome || !email || !telefone) {
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
    // Cria uma nova linha na tabela
    const tabelaBody = document.getElementById('tabela').querySelector('tbody');
    const novaLinha = tabelaBody.insertRow();

    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = email;
    novaLinha.insertCell().textContent = telefone;
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