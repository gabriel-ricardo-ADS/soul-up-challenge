const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
      alert('Preencha todos os campos antes de enviar.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
}