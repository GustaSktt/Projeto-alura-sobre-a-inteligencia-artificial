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
                afirmacao: "afirmação"
            },
            {
                texto: "Sukuna",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você participou de um debate em sala de aula sobre legalização do porte de arma. Você é a favor da legalização ou contra?",
        alternativas: [
            {
                texto: "A favor",
                afirmacao: "afirmação"
            },
            {
                texto: "Contra",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Imagine que você tem um filho e que completará 6 anos. Chegou a hora de fazer uma decisão importante, fifa ou pes?",
        alternativas: [
            {
                texto: "Fifa",
                afirmacao: "afirmação"
            },
            {
                texto: "Pes",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você trocaria sua mãe por 3 bilhoes de reais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação"
            },
            {
                texto: "Não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Coca-cola ou Pepsi? ",
        alternativas: [
            {
                texto: "Coca-cola",
                afirmacao: "afirmação"
            },
            {
                texto: "Pepsi",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostaSelecionada(alternativa) )   
        caixaAlternativas.appendChild(botaoAlternativas);
        
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes;
            historiaFinal =  afirmacoes;   
            atual++;
            mostraPergunta();
           
}
mostraPergunta();
