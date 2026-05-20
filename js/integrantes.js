const itensDoCarrossel = document.querySelectorAll('.slide .item');
const secaoDetalhes = document.querySelector('#integrante-detalhes');
const imagemDetalhe = document.querySelector('#detalhe-imagem');
const nomeDetalhe = document.querySelector('#detalhe-nome');
const cargoDetalhe = document.querySelector('#detalhe-cargo');
const rmDetalhe = document.querySelector('#detalhe-rm');
const descricaoDetalhe = document.querySelector('#detalhe-descricao');
const turmaDetalhe = document.querySelector('#detalhe-turma');
const linksDetalhe = document.querySelector('#detalhe-links');

const icones = {
    github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.01c-3.2.7-3.88-1.38-3.88-1.38-.53-1.33-1.29-1.68-1.29-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.11-.75.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.08 0 4.42-2.69 5.38-5.25 5.67.42.36.79 1.07.79 2.16v3.01c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.4h3.96V21H3V9.4Zm6.24 0h3.79v1.58h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-3.95v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.24V9.4Z"/></svg>`
};

function criarLinkSocial(tipo, url) {
    if (!url) return '';
    const nome = tipo === 'github' ? 'GitHub' : 'LinkedIn';
    return `
        <a class="social-link social-link--${tipo}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${nome}">
            <span class="social-link__icon">${icones[tipo]}</span>
            <span>${nome}</span>
        </a>
    `;
}

function mostrarIntegrante(item) {
    const { nome, cargo, rm, descricao, imagem, turma, github, linkedin } = item.dataset;

    imagemDetalhe.src = imagem;
    imagemDetalhe.alt = `Foto de ${nome}`;
    nomeDetalhe.textContent = nome;
    cargoDetalhe.textContent = cargo;
    rmDetalhe.textContent = `RM: ${rm}`;
    turmaDetalhe.textContent = `Turma: ${turma}`;
    descricaoDetalhe.textContent = descricao;
    linksDetalhe.className = 'social-links';
    linksDetalhe.innerHTML = `${criarLinkSocial('github', github)}${criarLinkSocial('linkedin', linkedin)}`;

    secaoDetalhes.classList.add('ativo');
    secaoDetalhes.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

itensDoCarrossel.forEach((item) => {
    item.addEventListener('click', () => mostrarIntegrante(item));
});