// Mensagem de boas-vindas no console para recrutadores
console.log("Bem-vindo ao portfólio do Alessandro! Desenvolvedor em evolução.");

// Função simples para garantir que as animações reiniciem se necessário
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
        card.style.transform = "scale(0.98)";
    });
    card.addEventListener('touchend', () => {
        card.style.transform = "scale(1.02)";
    });
});
