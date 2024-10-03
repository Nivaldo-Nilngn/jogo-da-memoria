const emojis = [
    "🐇", "🐇", "🐘", "🐘", "🐳", "🐳", "🦞", "🦞",
    "🦢", "🦢", "🐓", "🐓", "🐠", "🐠", "🐢", "🐢"
];
let openCards = [];

// Embaralha os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Cria o grid de cartas
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.onclick = handleClick;
    box.innerHTML = shuffleEmojis[i];
    document.querySelector(".game").appendChild(box);
}

// Lida com o clique nas cartas
function handleClick() {
    if (openCards.length < 2 && !this.classList.contains('boxOpen')) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

// Verifica se as cartas combinam
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];

    // Verifica se todas as cartas foram combinadas
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        // Exibe o modal de vitória
        showVictoryModal();
    }
}

// Função para exibir o modal de vitória
function showVictoryModal() {
    document.getElementById('victoryModal').style.display = 'flex';
}

// Fechar o modal ao clicar no botão 'X'
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('victoryModal').style.display = 'none';
});
