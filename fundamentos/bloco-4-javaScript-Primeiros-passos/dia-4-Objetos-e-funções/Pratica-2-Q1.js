function verificarPalindrome(nome){
    //consulta no https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
    let nomeRevertido = nome.split("").reverse().join("");
    //console.log(nomeRevertido)
    if(nome == nomeRevertido){
        return 'true';
    }
    return 'False';
}

console.log(verificarPalindrome('Desenvolvedor'))