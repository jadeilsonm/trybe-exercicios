function valorMaiorArray(array){
    let maiorValor = 0;
    for (const valor of array) {
        if(maiorValor > valor){
            continue;
        }
        maiorValor = valor;       
    }
    //console.log(maiorValor);
    console.log(`${array.indexOf(maiorValor)}`);
}
valorMaiorArray([2, 3, 6, 7, 10, 1]);

