const frases = [
    "Feliz Dia das Mães! Você é a melhor do mundo!",
    "Mãe, seu amor me guia todos os dias!",
    "Hoje é seu dia! Obrigado por tudo, mãe!",
    "Ser seu filho é o meu maior orgulho!",
    "Seu amor é meu maior presente. Te amo!",
    "Parabéns pelo seu dia, mãe maravilhosa!",
    "Mãe, você é luz, força e amor!",
    "Feliz Dia das Mães para a mulher mais incrível do mundo!",
    "Obrigada por sempre estar ao meu lado!",
    "Que seu dia seja tão lindo quanto você!",
    "Você merece todo amor do mundo, mãe!",
    "Sou quem sou por sua causa. Feliz Dia das Mães!",
    "Você é minha inspiração, mãe!",
    "Todo o amor do mundo ainda é pouco para você!",
    "Mãe, seu colo é meu lar!",
    "Hoje celebramos o seu amor incondicional!",
    "Feliz Dia das Mães para a rainha da nossa casa!",
    "Obrigado por me ensinar a ser forte!",
    "Mãe, sua presença é um presente diário!",
    "Você é o coração da nossa família!",
    "Mãe, te amo mais do que palavras podem dizer!",
    "Que seu dia seja cheio de abraços e sorrisos!",
    "Mãe, você é insubstituível!",
    "Seu carinho é meu maior tesouro!",
    "De todas as mães do mundo, você é a minha favorita!",
    "Você me ensinou a amar, sonhar e acreditar!",
    "Nada se compara ao seu amor!",
    "Mãe, você é tudo para mim!",
    "Você faz o mundo mais bonito só por existir!",
    "Feliz Dia das Mães! Te celebro todos os dias!",
    "Te admiro profundamente, mãe!",
    "Hoje o dia é seu! Curta com muito amor!",
    "Você merece flores, amor e gratidão eternos!",
    "Sua força me inspira todos os dias!",
    "Ser mãe é uma arte, e você é uma artista!",
    "Mãe, seu amor me protege mesmo de longe!",
    "Você é meu exemplo de vida!",
    "Feliz Dia das Mães! Que seu dia seja doce como seu abraço!",
    "Te amo mais a cada dia, mãe!",
    "Sou grato por cada sacrifício seu!",
    "Você é meu anjo na Terra!",
    "Feliz dia, minha rainha!",
    "Toda homenagem do mundo ainda seria pouco!",
    "Mãe, você é puro amor!",
    "Você me ensinou a viver com amor e coragem!",
    "Parabéns pelo seu dia, mãe querida!",
    "Obrigada por nunca desistir de mim!",
    "Você é minha base, meu porto seguro!",
    "Mãe, tudo que faço tem um pedacinho seu!",
    "Hoje é dia de celebrar a sua existência maravilhosa!"
];

const imagens = [
    "img/borboleta.gif",
    "img/coraçao.gif",
    "img/caracoração.gif",
    "img/nota.gif",
];


function criarFrase() {
    const coracao = document.createElement('div');
    coracao.className = 'frase';
    coracao.innerText = frases[Math.floor(Math.random() * frases.length)];
    coracao.style.left = Math.random() * 90 + "vw";
    document.getElementById('container').appendChild(coracao);

    setTimeout(() => coracao.remove(), 6000);
}

function criarImagem() {
    const img = document.createElement('img');
    img.src = imagens[Math.floor(Math.random() * imagens.length)];
    img.className = 'imagem';
    img.style.left = Math.random() * 90 + "vw";
    img.style.width = (40 + Math.random() * 40) + "px";
    document.getElementById('container').appendChild(img);

    setTimeout(() => img.remove(), 7000);
}

setInterval(() => {
    criarImagem();
    if (Math.random() < 0.5) criarFrase();
}, 1000);
