const formularioContato = document.querySelector('.contact-form');
const mensagemFeedback = document.querySelector('#form-feedback');

if (formularioContato) {
    formularioContato.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = formularioContato.nome.value.trim();
        const email = formularioContato.email.value.trim();
        const mensagem = formularioContato.mensagem.value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            mensagemFeedback.textContent = 'Preencha todos os campos antes de enviar.';
            mensagemFeedback.classList.remove('success');
            mensagemFeedback.classList.add('error');
            return;
        }

        if (!email.includes('@') || !email.includes('.')) {
            mensagemFeedback.textContent = 'Digite um e-mail válido.';
            mensagemFeedback.classList.remove('success');
            mensagemFeedback.classList.add('error');
            return;
        }

        mensagemFeedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
        mensagemFeedback.classList.remove('error');
        mensagemFeedback.classList.add('success');

        formularioContato.reset();
    });
}