const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const body = document.body;
const iconeSol = document.getElementById('icone-sol');
const iconeLua = document.getElementById('icone-lua');

// Mantém tema salvo
if (localStorage.getItem('tema') === 'light') {
    body.classList.add('light-mode');
    iconeSol.style.display = 'none';
    iconeLua.style.display = 'block';
}

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        iconeSol.style.display = 'none';
        iconeLua.style.display = 'block';
        localStorage.setItem('tema', 'light');
    } else {
        iconeSol.style.display = 'block';
        iconeLua.style.display = 'none';
        localStorage.setItem('tema', 'dark');
    }
});

const idiomaDropdownBtn = document.getElementById('idiomaDropdownBtn');
const opcoesIdioma = document.getElementById('opcoesIdioma');
const idiomaSelecionadoSpan = document.getElementById('idiomaSelecionado');
const idiomaPrincipalBandeira = idiomaDropdownBtn.querySelector('.bandeira');

const traducoes = {
    'pt': {
        'inicio-link': 'Início',
        'sobre-link': 'Sobre',
        'projetos-link': 'Projetos',
        'contatos-link': 'Contato',
        'titulo-principal': 'Samuel Silva',
        'subtitulo-principal': 'Software Developer',
        'sobre-titulo': 'SOBRE MIM',
        'paragrafo-sobre': 'Olá! Me chamo Samuel e atuo como desenvolvedor Front-End e UI/UX Designer com experiência em criar interfaces digitais intuitivas e visualmente atraentes.Minha paixão é unir design e tecnologia para entregar soluções que não apenas funcionam, mas encantam os usuários.Atualmente, estou expandindo minhas habilidades e aprofundando meus conhecimentos em desenvolvimento Full Stack. Meu objetivo é dominar o ciclo completo de criação de software, construindo aplicações robustas e completas, do back-end ao front-end. Estou sempre em busca de desafios que me permitam crescer e aplicar minha visão de design em um contexto de desenvolvimento mais amplo.Se você procura um profissional com um olhar detalhado para a experiência do usuário e a ambição de construir soluções completas, vamos conversar!',
        'projetos-titulo': 'PROJETOS',
        'trabalhos-recentes':'Trabalhos Recentes',
        'contatos-titulo': 'ENTRE EM CONTATO',
        'nome': 'Nome',
        'mensagem': 'Digite uma mensagem',
        'botao-contato': 'Enviar via Whatsapp',
        'bandeira': './img/bandeira-br.png' ,
        'titulo-final': 'Você tem uma ideia de projeto?',
        'paragrafo-final': 'Entre em contato e bora colaborar!',
        'botao-final': 'ENTRE EM CONTATO',
        'titulo-projeto-1': 'Site de Imóveis',
        'subtitulo-projeto-1': 'Trabalho Freelance',
        'titulo-projeto-2': 'Jogo do Número Secreto',
        'subtitulo-projeto-2': 'Case de Estudo',
        'titulo-projeto-3': 'Compra de Ingresso',
        'subtitulo-projeto-3': 'Case de Estudo',
        'titulo-projeto-4': 'Amigo Secreto',
        'subtitulo-projeto-4': 'Case de Estudo',
        'titulo-projeto-5': 'Carrinho de Compras',
        'subtitulo-projeto-5': 'Case de Estudo',
        'footer-copyright': 'Copyright 2025. Todos os direitos reservados.',
        'footer-signature-text': 'Idealizado e criado por Samuel Silva.',
    },
    'en': {
        'inicio-link': 'Home',
        'sobre-link': 'About',
        'projetos-link': 'Projects',
        'contatos-link': 'Contact',
        'titulo-principal': 'Samuel Silva',
        'subtitulo-principal': 'Software Developer',
        'sobre-titulo': 'ABOUT ME',
        'paragrafo-sobre': 'Hello! My name is Samuel and I work as a Front-End developer and UI/UX Designer with experience creating intuitive and visually appealing digital interfaces. My passion is to unite design and technology to deliver solutions that not only work but also delight users. I am currently expanding my skills and deepening my knowledge in Full Stack development. My goal is to master the complete software creation cycle, building robust and complete applications, from back-end to front-end. I am always looking for challenges that allow me to grow and apply my design vision in a broader development context. If you are looking for a professional with a detailed eye for user experience and the ambition to build complete solutions, let\'s talk!',
        'projetos-titulo': 'PROJECTS',
        'trabalhos-recentes': 'Recent Works',
        'contatos-titulo': 'GET IN TOUCH',
        'nome': 'Name',
        'mensagem': 'Type a message',
        'botao-contato': 'Send via Whatsapp',
        'bandeira': './img/bandeira-eua.png',
        'titulo-final': 'Do you have a project idea?',
        'paragrafo-final': 'Get in touch and let´s go collaborate!',
        'botao-final': 'GET IN TOUCH',
        'titulo-projeto-1': 'Real Estate Website',
        'subtitulo-projeto-1': 'Freelance Work',
        'titulo-projeto-2': 'Secret Number Game',
        'subtitulo-projeto-2': 'Case Study',
        'titulo-projeto-3': 'Ticket Purchase',
        'subtitulo-projeto-3': 'Case Study',
        'titulo-projeto-4': 'Secret Santa',
        'subtitulo-projeto-4': 'Case Study',
        'titulo-projeto-5': 'Shopping Cart',
        'subtitulo-projeto-5': 'Case Study',
        'footer-copyright': 'Copyright 2025. All rights reserved.',
        'footer-signature-text': 'Conceived and created by Samuel Silva.',
    },
};

const elementosTraduziveis = {
    'inicio-link': document.querySelector('a[href="#inicio"]'),
    'sobre-link': document.querySelector('a[href="#sobre"]'),
    'projetos-link': document.querySelector('a[href="#projetos"]'),
    'contatos-link': document.querySelector('a[href="#contatos"]'),
    'titulo-principal': document.querySelector('.cabecalho h1'),
    'subtitulo-principal': document.querySelector('.cabecalho-subtitulo'),
    'sobre-titulo': document.querySelector('.sobre-titulo'),
    'paragrafo-sobre': document.getElementById('paragrafo-sobre'),
    'projetos-titulo': document.querySelector('.projetos-titulo'),
    'trabalhos-recentes': document.getElementById('trabalhos-recentes'),
    'titulo-final': document.getElementById('titulo-final'),
    'paragrafo-final': document.getElementById('paragrafo-final'),
    'botao-final': document.getElementById('botao-final'),
    'titulo-projeto-1': document.getElementById('titulo-projeto-1'),
    'subtitulo-projeto-1': document.getElementById('subtitulo-projeto-1'),
    'titulo-projeto-2': document.getElementById('titulo-projeto-2'),
    'subtitulo-projeto-2': document.getElementById('subtitulo-projeto-2'),
    'titulo-projeto-3': document.getElementById('titulo-projeto-3'),
    'subtitulo-projeto-3': document.getElementById('subtitulo-projeto-3'),
    'titulo-projeto-4': document.getElementById('titulo-projeto-4'),
    'subtitulo-projeto-4': document.getElementById('subtitulo-projeto-4'),
    'titulo-projeto-5': document.getElementById('titulo-projeto-5'),
    'subtitulo-projeto-5': document.getElementById('subtitulo-projeto-5'),
    'footer-copyright': document.getElementById('footer-copyright'),
    'footer-signature-text': document.getElementById('footer-signature-text'),
};

function traduzir(idioma) {
    const traducao = traducoes[idioma];
    if (traducao) {
        for (const chave in elementosTraduziveis) {
            const elemento = elementosTraduziveis[chave];
            if (elemento && traducao[chave]) {
                elemento.textContent = traducao[chave];
            }
        }
        
        idiomaSelecionadoSpan.textContent = idioma.toUpperCase();
        idiomaPrincipalBandeira.src = traducao['bandeira'];
    }
}

idiomaDropdownBtn.addEventListener('click', (evento) => {
    evento.stopPropagation();
    opcoesIdioma.classList.toggle('visivel');
    idiomaDropdownBtn.classList.toggle('aberto');
});

document.querySelectorAll('.idioma-opcao').forEach(opcao => {
    opcao.addEventListener('click', (evento) => {
        const idiomaSelecionado = evento.currentTarget.getAttribute('data-lang');
        traduzir(idiomaSelecionado);
        opcoesIdioma.classList.remove('visivel');
        idiomaDropdownBtn.classList.remove('aberto');
    });
});

document.addEventListener('click', (evento) => {
    if (!opcoesIdioma.contains(evento.target) && !idiomaDropdownBtn.contains(evento.target)) {
        opcoesIdioma.classList.remove('visivel');
        idiomaDropdownBtn.classList.remove('aberto');
    }
});

traduzir('pt');

const projetosCaixa = document.getElementById('projetos-rolagem');
const indicadoresContainer = document.getElementById('indicadores-carrossel');
const projetos = document.querySelectorAll('.projetos-caixa .projetos-card');

function criarIndicadores() {
    indicadoresContainer.innerHTML = '';
    projetos.forEach((_, index) => {
        const bolinha = document.createElement('div');
        bolinha.classList.add('bolinha');
        bolinha.dataset.index = index;
        indicadoresContainer.appendChild(bolinha);
    });
}

criarIndicadores();

const indicadores = document.querySelectorAll('.bolinha');

function atualizarIndicadorAtivo() {
    const scrollLeft = projetosCaixa.scrollLeft;
    const scrollWidth = projetosCaixa.scrollWidth - projetosCaixa.clientWidth;
    const totalProjetos = projetos.length;
    const larguraProjeto = projetosCaixa.scrollWidth / totalProjetos;
    const indiceAtivo = Math.round(scrollLeft / larguraProjeto);

    indicadores.forEach(bolinha => {
        bolinha.classList.remove('ativa');
    });

    if (indicadores[indiceAtivo]) {
        indicadores[indiceAtivo].classList.add('ativa');
    }
}

if (projetosCaixa) projetosCaixa.addEventListener('scroll', atualizarIndicadorAtivo);

indicadores.forEach(bolinha => {
    bolinha.addEventListener('click', () => {
        const indice = parseInt(bolinha.dataset.index);
        const larguraProjeto = projetosCaixa.scrollWidth / projetos.length;
        projetosCaixa.scrollTo({
            left: indice * larguraProjeto,
            behavior: 'smooth'
        });
    });
});

atualizarIndicadorAtivo();

const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

const larguraDoCartao = (projetos.length ? projetos[0].offsetWidth + 32 : 332);
if (botaoAnterior) {
    botaoAnterior.addEventListener('click', () => {
        projetosCaixa.scrollBy({
            left: -larguraDoCartao,
            behavior: 'smooth'
        });
        setTimeout(atualizarIndicadorAtivo, 400);
    });
}

if (botaoProximo) {
    botaoProximo.addEventListener('click', () => {
        projetosCaixa.scrollBy({
            left: larguraDoCartao,
            behavior: 'smooth'
        });
        setTimeout(atualizarIndicadorAtivo, 400);
    });
}

function enviarWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511942075707';

    const texto = `Olá! Me chamo ${nome}, ${mensagem} `;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url);

    window.open(url, '_blank');
}


// MODAL POP-UP 

const modal = document.getElementById('modal-projeto');
const fecharBtn = document.querySelector('.modal .fechar');

// DADOS DOS PROJETOS
const dadosProjetos = {
    'projeto-imoveis': {
        pt: {
            titulo: 'Site de Imóveis',
            descricao: 'Um projeto freelance para um corretor imobiliário, desenvolvido com HTML, CSS, JavaScript, WordPress e Elementor. O site é totalmente responsivo e otimizado para a visualização de propriedades, com uma interface amigável e intuitiva.',
            imagens: [
                '/img/site-imoveis.png',
                'img/imoveis-foto2.png',
                'img/imoveis-foto3.png'
            ],
            linkGithub: 'https://github.com/samudasilva/site-imoveis-freelancer',
            linkLive: 'https://sidneisilvaimoveis.online/'
        },
        en: {
            titulo: 'Real Estate Website',
            descricao: 'A freelance project for a real estate agency, developed with HTML, CSS, and JavaScript. The website is fully responsive and optimized for property viewing, with a friendly and intuitive interface.',
            imagens: [
                '/img/site-imoveis.png',
                'img/imoveis-foto2.png',
                'img/imoveis-foto3.png'
            ],
            linkGithub: 'https://github.com/samudasilva/site-imoveis-freelancer',
            linkLive: 'https://seusiteaqui.com.br'
        }
    },
    'projeto-numero-secreto': {
        pt: {
            titulo: 'Jogo do Número Secreto',
            descricao: 'Um jogo simples, mas divertido, para adivinhar um número aleatório. Desenvolvido como um case de estudo para aprimorar habilidades em lógica de programação e manipulação do DOM em JavaScript.',
            imagens: [
                '/img/numero-secreto.png',
                '/img/numero-foto2.png',
                'img/numero-foto3.png',
                'img/numero-foto4.png'
            ],
            linkGithub: 'https://github.com/samudasilva/jogo-numero-secreto',
            linkLive: 'https://seusiteaqui.com.br'
        },
        en: {
            titulo: 'Secret Number Game',
            descricao: 'A simple, yet fun, game to guess a random number. Developed as a case study to improve skills in programming logic and DOM manipulation in JavaScript.',
            imagens: [
                '/img/numero-secreto.png',
                'img/numero-foto2.png',
                'img/numero-foto3.png',
                'img/numero-foto4.png'

            ],
            linkGithub: 'https://github.com/samudasilva/jogo-numero-secreto',
            linkLive: 'https://seusiteaqui.com.br'
        }
    },
    'projeto-ingresso': {
        pt: {
            titulo: 'Compra de Ingresso',
            descricao: 'Uma página interativa de compra de ingressos com validação de dados em tempo real. Este projeto explora formulários, eventos de clique e manipulação de estado em JavaScript.',
            imagens: [
                '/img/ingresso.png',
                'img/ingresso-foto1.png',
                'img/ingresso-foto2.png',
                'img/ingresso-foto3.png',
                'img/ingresso-foto4.png'
            ],
            linkGithub: 'https://github.com/samudasilva/ingressos-compra',
            linkLive: 'https://seusiteaqui.com.br'
        },
        en: {
            titulo: 'Ticket Purchase',
            descricao: 'An interactive ticket purchasing page with real-time data validation. This project explores forms, click events, and state manipulation in JavaScript.',
            imagens: [
                '/img/ingresso.png',
                'img/ingresso-foto1.png',
                'img/ingresso-foto2.png',
                'img/ingresso-foto3.png',
                'img/ingresso-foto4.png'
            ],
            linkGithub: 'https://github.com/samudasilva/ingressos-compra',
            linkLive: 'https://seusiteaqui.com.br'
        }
    },
    'projeto-amigo-secreto': {
        pt: {
            titulo: 'Sorteador de Amigo Secreto',
            descricao: 'Uma ferramenta web para sortear amigos secretos de forma justa e aleatória. O foco aqui foi a lógica de back-end com Node.js e a comunicação com o front-end.',
            imagens: [
                '/img/amigo-secreto.png',
                'img/amigo-foto1.png',
                'img/amigo-foto2.png',
                'img/amigo-foto3.png',
            ],
            linkGithub: 'https://github.com/samudasilva/sorteador-amigo-secreto',
            linkLive: 'https://seusiteaqui.com.br'
        },
        en: {
            titulo: 'Secret Santa',
            descricao: 'A web tool to fairly and randomly draw Secret Santa. The focus here was on back-end logic with Node.js and communication with the front-end.',
            imagens: [
              '/img/amigo-secreto.png',
                'img/amigo-foto1.png',
                'img/amigo-foto2.png',
                'img/amigo-foto3.png',
            ],
            linkGithub: 'https://github.com/samudasilva/sorteador-amigo-secreto',
            linkLive: 'https://seusiteaqui.com.br'
        }
    },
    'projeto-carrinho-compras': {
        pt: {
            titulo: 'Carrinho de Compras',
            descricao: 'Simulação de um carrinho de compras funcional, calculando totais e subtotais. Um excelente exercício para manipular o estado de uma aplicação e atualizar a interface de usuário dinamicamente.',
            imagens: [
                '/img/carrinho-compras.png',
                'img/carrinho-foto1.png',
                'img/carrinho-foto2.png',
                'img/carrinho-foto3.png',
                'img/carrinho-foto4.png'
            ],
            linkGithub: 'https://github.com/samudasilva/carrinho-compras',
            linkLive: 'https://seusiteaqui.com.br'
        },
        en: {
            titulo: 'Shopping Cart',
            descricao: 'A simulation of a functional shopping cart, calculating totals and subtotals. An excellent exercise for manipulating application state and dynamically updating the user interface.',
            imagens: [
                '/img/carrinho-compras.png',
                'img/carrinho-foto1.png',
                'img/carrinho-foto2.png',
                'img/carrinho-foto3.png',
                'img/carrinho-foto4.png'
            ],
            linkGithub: 'https://github.com/samudasilva/carrinho-compras',
            linkLive: 'https://seusiteaqui.com.br'
        }
    }
};

const projetosCards = document.querySelectorAll('.projetos-card');

// --- NOVO CÓDIGO DO LIGHTBOX INSERIDO AQUI ---
const lightbox = document.getElementById('lightbox-imagem');
const lightboxConteudo = document.getElementById('imagem-expandida');
const fecharLightboxBtn = document.querySelector('.fechar-lightbox');
// ---------------------------------------------


projetosCards.forEach(card => {
    card.addEventListener('click', (evento) => {
        const projetoId = card.dataset.projetoId;
        if (!projetoId || !dadosProjetos[projetoId]) {
            console.error('Projeto não encontrado nos dados:', projetoId);
            return;
        }

        // Obtém o idioma atual
        const idiomaAtual = idiomaSelecionadoSpan.textContent.toLowerCase();
        const dadosDoProjeto = dadosProjetos[projetoId][idiomaAtual];

        // Preenche o modal com os dados do projeto
        document.getElementById('modal-titulo').textContent = dadosDoProjeto.titulo;
        document.getElementById('modal-descricao').textContent = dadosDoProjeto.descricao;

        // Preenche as imagens e as torna clicáveis para o lightbox
        const containerImagens = document.getElementById('modal-imagens');
        containerImagens.innerHTML = ''; // Limpa as imagens antigas
        dadosDoProjeto.imagens.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            containerImagens.appendChild(img);
            
            // Adiciona um listener de clique a cada imagem
            img.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxConteudo.src = src;
                body.style.overflow = 'hidden'; // Impede o scroll do body quando o lightbox está aberto
            });
        });

        // Preenche os links
        document.getElementById('modal-link-github').href = dadosDoProjeto.linkGithub;
        document.getElementById('modal-link-live').href = dadosDoProjeto.linkLive;

        // Exibe o modal
        modal.classList.add('visivel');
        body.style.overflow = 'hidden'; // Impede o scroll do body quando o modal está aberto
    });
});

// Fechar o modal ao clicar no botão 'x'
fecharBtn.addEventListener('click', () => {
    modal.classList.remove('visivel');
    body.style.overflow = ''; // Restaura o scroll do body
});

// Fechar o modal ao clicar fora
window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.remove('visivel');
        body.style.overflow = '';
    }
});

// --- NOVO CÓDIGO PARA FECHAR O LIGHTBOX ---
// Fechar o lightbox ao clicar no botão 'x'
fecharLightboxBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    body.style.overflow = '';
});

// Fechar o lightbox ao clicar fora da imagem
window.addEventListener('click', (evento) => {
    if (evento.target === lightbox) {
        lightbox.style.display = 'none';
        body.style.overflow = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os elementos que vamos usar
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');

    // 2. Adiciona um "ouvinte de evento" (event listener) ao botão
    menuHamburguer.addEventListener('click', () => {
        // 3. Alterna a classe 'aberto' no elemento .menu
        // Se a classe existe, remove. Se não existe, adiciona.
        menu.classList.toggle('aberto');
    });

    // 4. (OPCIONAL) Fechar o menu ao clicar em um link (navegação)
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe 'aberto' ao clicar em um link, se estiver visível
            if (menu.classList.contains('aberto')) {
                menu.classList.remove('aberto');
            }
        });
    });
});