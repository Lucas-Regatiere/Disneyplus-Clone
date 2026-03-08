document.addEventListener('DOMContentLoaded', function() {
    // Seleção dos elementos
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');

    // --- Lógica do Header (Scroll) ---
    if (heroSection && header) {
        const alturaHero = heroSection.clientHeight;

        window.addEventListener('scroll', function() {
            const posicaoAtual = window.scrollY;

            if (posicaoAtual < alturaHero) {
                header.classList.add('header--is-hidden');
            } else {
                header.classList.remove('header--is-hidden');
            }
        });
    }

    // --- Seção de Atrações (Abas) ---
    buttons.forEach(botao => {
        botao.addEventListener('click', function(e) {
            const abaAlvo = e.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            escondeTodasAbas();
            if (aba) aba.classList.add('shows__list--is-active');
            
            removeBotaoAtivo();
            e.target.classList.add('shows__tabs__button--is-active');
        });
    });

    // --- Seção FAQ (Accordion) ---
    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta);
    });
});

// Funções Auxiliares
function abreOuFechaResposta(event) {
    const classe = 'faq__questions__item--is-open';
    // currentTarget é sempre a div [data-faq-question] que recebeu o evento
    const elementoPai = event.currentTarget.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is-active');
    });
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    });
}
