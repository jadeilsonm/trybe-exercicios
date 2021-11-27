let nome = 'cavalo';
nome = nome.toUpperCase();

if(nome == 'CAVALO'){
    console.log('Movimento em L');
}else if(nome == 'BISPO'){
    console.log('Movimento em diagonal');
}else if(nome == 'PIÂO'){
    console.log('Movimento a uma casa a frente');
}else if(nome == 'TORRE'){
    console.log('Movimento em linha');
}else if(nome == 'RAINHA'){
    console.log('todos os movimentos');
}else if(nome == 'REI'){
    console.log('Movimento em uma casa para todos os lados');
}else{
    console.log('Peça invalida');
}