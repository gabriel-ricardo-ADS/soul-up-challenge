const dadosPrototipo = {
    novo: {
        titulo: 'Onboarding guiado',
        texto: 'Para usuários novos, a melhor experiência começa com uma missão curta, explicação simples e feedback imediato sobre os pontos ganhos.',
        detalhe: 'Foco em reduzir dúvida inicial, apresentar uma tarefa simples e criar sensação rápida de avanço.',
        pontos: '60%',
        progresso: '60%'
    },
    engajado: {
        titulo: 'Desafio progressivo',
        texto: 'Para usuários engajados, recomendo desafios em sequência, metas semanais e recompensas visuais para manter a motivação ativa.',
        detalhe: 'Foco em progressão, rotina de uso e recompensa por continuidade dentro da plataforma.',
        pontos: '85%',
        progresso: '85%'
    },
    retorno: {
        titulo: 'Retomada inteligente',
        texto: 'Para quem voltou depois de um tempo, mostre o progresso anterior, explique o que mudou e sugira uma ação fácil para recomeçar.',
        detalhe: 'Foco em recuperação de contexto, acolhimento e retorno sem fricção.',
        pontos: '70%',
        progresso: '70%'
    },
    'baixo-engajamento': {
        titulo: 'Experiência mais clara',
        texto: 'Quando o engajamento cair, reduza etapas, simplifique os textos e use uma recomendação personalizada para o usuário saber exatamente o próximo passo.',
        detalhe: 'Foco em clareza, menos esforço cognitivo e chamadas de ação mais diretas.',
        pontos: '78%',
        progresso: '78%'
    }
};

const botoesPrototipo = document.querySelectorAll('.prototype-option');
const tituloPrototipo = document.querySelector('#prototype-title');
const textoPrototipo = document.querySelector('#prototype-text');
const detalhePrototipo = document.querySelector('#prototype-detail');
const pontosPrototipo = document.querySelector('#prototype-score');
const barraPrototipo = document.querySelector('#prototype-bar');
const bubblePrototipo = document.querySelector('.experience-bubble');

function obterUsuarioLogado() {
    const dadosSalvos = localStorage.getItem('usuarioSoulUp');

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        localStorage.removeItem('usuarioSoulUp');
        return null;
    }
}

function atualizarSaudacaoLumen() {
    const usuario = obterUsuarioLogado();
    const etiqueta = document.querySelector('.experience-bubble .mockup-label');

    if (!etiqueta) return;

    if (usuario && usuario.nome) {
        etiqueta.textContent = `Sugestão da Lumën para ${usuario.nome}`;
        return;
    }

    etiqueta.textContent = 'Sugestão da Lumën para visitante';
}

atualizarSaudacaoLumen();

botoesPrototipo.forEach((botao) => {
    botao.addEventListener('click', () => {
        const perfil = botao.dataset.profile;
        const dados = dadosPrototipo[perfil];

        if (!dados) return;

        botoesPrototipo.forEach((item) => item.classList.remove('active'));
        botao.classList.add('active');

        tituloPrototipo.textContent = dados.titulo;
        textoPrototipo.textContent = dados.texto;
        detalhePrototipo.textContent = dados.detalhe;
        pontosPrototipo.textContent = dados.pontos;
        barraPrototipo.style.width = dados.progresso;

        if (bubblePrototipo) {
            bubblePrototipo.classList.remove('is-changing');
            void bubblePrototipo.offsetWidth;
            bubblePrototipo.classList.add('is-changing');
        }
    });
});
