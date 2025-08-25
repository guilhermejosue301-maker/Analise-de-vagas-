// --- LÓGICA PARA A NAVEGAÇÃO POR ABAS ---

// Seleciona os elementos HTML que vamos manipular
const marker = document.getElementById('tab-marker');
const buttons = document.querySelectorAll('.tab-button');

/**
 * Atualiza a posição e o tamanho do marcador azul para se alinhar com o botão ativo.
 * @param {HTMLElement} button - O botão da aba que foi clicado.
 */
function updateMarker(button) {
    // A posição do marcador é o 'offsetLeft' do botão.
    // 'offsetLeft' é a distância em pixels do canto esquerdo do botão até o canto esquerdo do seu container.
    marker.style.width = `${button.offsetWidth}px`;
    marker.style.transform = `translateX(${button.offsetLeft}px)`;
}

/**
 * Mostra a página de conteúdo correspondente à aba clicada.
 * @param {string} pageName - O nome da página a ser exibida (ex: 'intro', 'vagas').
 */
function showPage(pageName) {
    // 1. Esconde todos os conteúdos de página
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    // 2. Remove a classe 'active' de todos os botões
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 3. Encontra o botão e a página que devem ficar ativos
    const activeButton = document.getElementById(`btn-${pageName}`);
    const activePage = document.getElementById(`page-${pageName}`);

    // 4. Adiciona a classe 'active' para mostrá-los
    activeButton.classList.add('active');
    activePage.classList.add('active');

    // 5. Atualiza a posição do marcador para o botão que agora está ativo
    updateMarker(activeButton);
}

// --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---

// Garante que a página de introdução seja mostrada assim que o site carregar.
document.addEventListener('DOMContentLoaded', () => {
    showPage('intro');
});

// Atualiza a posição do marcador se a janela for redimensionada, para garantir a responsividade.
window.addEventListener('resize', () => {
    const activeButton = document.querySelector('.tab-button.active');
    if (activeButton) {
        // Adiciona um pequeno delay para garantir que o layout do navegador se estabilizou antes de recalcular.
        setTimeout(() => {
            updateMarker(activeButton);
        }, 100);
    }
});
