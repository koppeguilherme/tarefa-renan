document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        let valido = true;

        //padroes
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');

        //erros
        const nomeErro = document.getElementById('nomeErro');
        const emailErro = document.getElementById('emailErro');



        nomeErro.textContent = '';
        emailErro.textContent = '';

        //Funcao deixar o nome obrigatorio no forms
        if (nome.value.trim() === '') {
            nomeErro.textContent = 'O nome é obrigatório.';
            valido = false;
        }

        //deixar o email no padrao certo
        const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!padraoEmail.test(email.value.trim())) {
            emailErro.textContent = 'O email não é válido.';
            valido = false;
        }

        if (!valido) {
            event.preventDefault();//se valido for true esta no padrao e deixa passar
        }
    });
});
