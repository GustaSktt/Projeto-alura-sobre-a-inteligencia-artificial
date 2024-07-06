const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem é mais forte, Satoru Gojo ou Sukuna?",
        alternativas: [
            {
                texto: "Satoru Gojo",
                afirmacao: "Ele e brabo"
            },
            {
                texto: "Sukuna",
                afirmacao: "Simplesmente Sukuna"
            }
        ]
    },
    {
        enunciado: "Você participou de um debate em sala de aula sobre legalização do porte de arma. Você é a favor da legalização ou contra?",
        alternativas: [
            {
                texto: "A favor",
                afirmacao: "E tiro pra todo lado"
            },
            {
                texto: "Contra",
                afirmacao: "Nao e tiro para todo lado"
            }
        ]
    },
    {
        enunciado: "Imagine que você tem um filho e que completará 6 anos. Chegou a hora de fazer uma decisão importante, fifa ou pes?",
        alternativas: [
            {
                texto: "Fifa",
                afirmacao: "Escolheu um jogo bugado."
            },
            {
                texto: "Pes",
                afirmacao: "Jogo bom, mas que ta ruim hoje em dia."
            }
        ]
    },
    {
        enunciado: "Você trocaria sua mãe por 3 bilhoes de reais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Você realmente faria isso?"
            },
            {
                texto: "Não",
                afirmacao: "Parabens você ama sua mãe!"
            }
        ]
    },
    {
        enunciado: "Coca-cola ou Pepsi? ",
        alternativas: [
            {
                texto: "Coca-cola",
                afirmacao: "O melhor"
            },
            {
                texto: "Pepsi",
                afirmacao: "Sério isso. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
