const custoProduto = 10;
const valorVendaProduto = 15;

let valorFinal = (custoProduto * 0.2) + custoProduto;
let lucro =  valorVendaProduto - valorFinal;

if (custoProduto < 0 || valorVendaProduto < 0){
    console.log('Erro!')
}else{
    console.log(`Lucro: ${(lucro*1000)}`)
}