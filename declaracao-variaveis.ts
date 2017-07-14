function iniciaTime(iniciaJogo: boolean) {
    let nomeTime = 'Paulo e amigos';
    let cidade = 'Mossoró';
    if (iniciaJogo) {
        cidade = 'Natal'
    }
    console.log(`${nomeTime} vão jogar em ${cidade}`);
}

iniciaTime(false);