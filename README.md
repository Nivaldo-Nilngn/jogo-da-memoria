# 🧠 Jogo da Memória

## Sobre o Projeto
O **Jogo da Memória** é um jogo interativo e divertido, onde o objetivo é encontrar pares de cartas iguais. Desenvolvido com **HTML**, **CSS** e **JavaScript**, o jogo proporciona uma experiência simples e envolvente. Ao final, um modal estilizado é exibido parabenizando o jogador pela vitória, e há a opção de reiniciar o jogo a qualquer momento.

## Funcionalidades
- 🎴 **Cartas com ícones de emojis**: Diversos emojis divertidos para tornar o jogo visualmente agradável.
- 🔄 **Verificação automática**: O jogo verifica automaticamente se as cartas combinam.
- 🏆 **Modal de vitória**: Um modal estilizado aparece quando todos os pares são encontrados.
- 🔁 **Botão de "Reset"**: Reinicie o jogo rapidamente a qualquer momento.
- 📱 **Design responsivo**: O layout se adapta a diferentes tamanhos de tela, funcionando bem em dispositivos móveis e desktop.

## Estrutura de Arquivos

```bash
.
├── index.html          # Arquivo principal contendo a estrutura do jogo.
├── sources/
│   ├── styles/
│   │   ├── reset.css   # Reset de estilos para garantir consistência entre navegadores.
│   │   └── main.css    # Estilos principais do jogo.
│   └── scripts/
│       └── engine.js   # Lógica do jogo em JavaScript.
└── README.md           # Documentação do projeto.
```

## Como Jogar
1. Ao abrir o jogo, um tabuleiro com **16 cartas** será exibido, embaralhadas aleatoriamente.
2. Clique nas cartas para revelá-las e tente encontrar o par correspondente.
3. Se duas cartas forem iguais, elas permanecerão abertas. Caso contrário, serão viradas novamente.
4. Quando todas as combinações forem encontradas, o jogo exibirá um modal de vitória.
5. Para jogar novamente, clique no botão **"Jogar Novamente"** ou utilize o botão **"RESET GAME"**.

## Tecnologias Utilizadas
- **HTML**: Para a estrutura do jogo e elementos.
- **CSS**: Para o estilo e a responsividade do design.
- **JavaScript**: Para a lógica do jogo, manipulação de eventos e interações do usuário.

## Como Rodar o Projeto
1. Clone o repositório ou faça o download dos arquivos diretamente.
   ```bash
   git clone https://github.com/nivaldo-nilngn/jogo-da-memoria.git
Abra o arquivo index.html diretamente no seu navegador para iniciar o jogo.

## Customização

- **Adicionar mais cartas**: Se quiser adicionar mais cartas ao jogo, basta inserir novos emojis no array `emojis` dentro do arquivo `engine.js` e ajustar o estilo do grid no arquivo `main.css` para acomodar mais cartas.
- **Modificar o design**: Se desejar personalizar o visual, edite o arquivo `main.css` na pasta `styles` e ajuste o layout conforme sua preferência.

## Demonstração

Você pode jogar a versão online do **Jogo da Memória** através deste link:  
🔗 [Jogue agora!](https://nivaldo-nilngn.github.io/jogo-da-memoria/)

## Licença

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para utilizar, modificar e distribuir conforme sua necessidade.

---

Feito com ❤️ por [Nivaldo G Neto](https://github.com/nivaldo-nilngn)
