const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(classificadorNivelDeHeroi('Hulk', 6000));
});

function classificadorNivelDeHeroi(nome, quantidade) {
    var nomeHeroi = nome
    var xp = quantidade
    var elo

    if (xp < 1000) {
        elo = 'Ferro'
    } else if (xp > 1001 && xp <= 2000) {
        elo = 'Bronze';
    } else if (xp > 2001 && xp <= 5000) {
        elo = 'Prata';
    } else if (xp > 5001 && xp <= 7000) {
        elo = 'Ouro';
    } else if (xp > 7001 && xp <= 8000) {
        elo = 'Platina';
    } else if (xp > 8001 && xp <= 9000) {
        elo = 'Ascendente';
    } else if (xp > 9001 && xp <= 1000) {
        elo = 'Imortal';
    } else if (xp > 10001) {
        elo = 'Radiante';
    }

    return `O Herói de nome ${nomeHeroi} está no nível de ${elo}`
}
app.listen(port, () => {
    console.log(`Servidor Express rodando em http://localhost:${port}`);
});
