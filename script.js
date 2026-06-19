/* ==========================================================================
   1. GERENCIAMENTO DAS ABAS INTERATIVAS (SUSTENTABILIDADE)
   ========================================================================== */
function mudarTab(index) {
    // Seleciona todos os blocos de conteúdo e todos os botões das abas
    const conteudos = document.querySelectorAll('.tab-content');
    const botoes = document.querySelectorAll('.tab-btn');

    // Remove as classes de atividade de todos os elementos para resetar o estado
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
        // Remove animações anteriores para que possam ser reiniciadas
        conteudo.style.animation = 'none'; 
    });
    
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Ativa o conteúdo e o botão correspondentes ao índice clicado
    botoes[index].classList.add('active');
    conteudos[index].classList.add('active');
    
    // Força o navegador a recalcular o elemento para reiniciar a animação CSS suave
    conteudos[index].offsetHeight; 
    conteudos[index].style.animation = null;
}

/* ==========================================================================
   2. EFEITO DINÂMICO NO HEADER AO ROZAR A PÁGINA (SCROLL)
   ========================================================================== */
function gerenciarHeader() {
    const header = document.querySelector('header');
    
    // Se o usuário rolar mais de 50 pixels para baixo, o header muda de estilo
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#2D0B30'; // Roxo mais escuro/sólido
        header.style.padding = '0.8rem 2rem';     // Reduz a altura (efeito de encolhimento)
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = '#4A154B'; // Roxo principal original
        header.style.padding = '1.2rem 2rem';     // Altura padrão
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    }
}

// Escuta o evento de rolagem da janela para disparar a função do header
window.addEventListener('scroll', gerenciarHeader);

/* ==========================================================================
   3. RECURSO EXTRA: CONTADOR DE IMPACTO SUSTENTÁVEL (ANIMAÇÃO DE NÚMEROS)
   ========================================================================== */
// Esta função cria uma simulação em tempo real para demonstrar como o agro sustentável 
// poupa recursos a cada segundo através da tecnologia de precisão.
function iniciarContadorImpacto() {
    // Cria dinamicamente um pequeno painel flutuante de dados no rodapé da seção sustentabilidade
    const secaoSustentavel = document.getElementById('sustentabilidade');
    
    if (secaoSustentavel) {
        const painelContador = document.createElement('div');
        painelContador.style.marginTop = '2rem';
        painelContador.style.padding = '1.5rem';
        painelContador.style.backgroundColor = '#2E7D32'; // Verde destaque
        painelContador.style.color = '#FFFFFF';
        painelContador.style.borderRadius = '12px';
        painelContador.style.textAlign = 'center';
        painelContador.style.fontWeight = '600';
        
        painelContador.innerHTML = `
            <span style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 0.5rem;">
                Estimativa de Água Poupada no Campo Hoje (Tecnologia de Precisão):
            </span>
            <span id="litros-contador" style="font-size: 2rem; font-weight: 800; color: #E8F5E9;">1.250</span> Litros
        `;
        
        secaoSustentavel.appendChild(painelContador);
        
        // Incrementa o contador simulado de litros a cada segundo
        let litros = 1250;
        setInterval(() => {
            litros += Math.floor(Math.random() * 15) + 5; // Adiciona entre 5 e 20 litros por segundo
            document.getElementById('litros-contador').innerText = litros.toLocaleString('pt-BR');
        }, 1000);
    }
}

/* ==========================================================================
   4. INICIALIZAÇÃO DOS SCRIPTS
   ========================================================================== */
// Garante que o JavaScript só vai rodar após todo o HTML estar carregado na árvore DOM
document.addEventListener('DOMContentLoaded', () => {
    iniciarContadorImpacto();
    
    // Configura o evento de clique inicial caso o HTML utilize a função inline `onclick="mudarTab(X)"`
    // Essa escuta garante redundância e estabilidade nos navegadores mais modernos
    const botoesAba = document.querySelectorAll('.tab-btn');
    botoesAba.forEach((botao, indice) => {
        botao.addEventListener('click', () => mudarTab(indice));
    });
});
