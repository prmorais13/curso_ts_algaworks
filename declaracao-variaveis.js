function iniciaTime(iniciaJogo) {
    var nomeTime = 'Paulo e amigos';
    var cidade = 'Mossoró';
    if (iniciaJogo) {
        cidade = 'Natal';
    }
    console.log(nomeTime + " v\u00E3o jogar em " + cidade);
}
iniciaTime(false);
