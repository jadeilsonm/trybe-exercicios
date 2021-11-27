const salario = 3000;
let salarioDescINSS = salario;

if (salario <= 1556.94){
    salarioDescINSS -= salario * 0.08;
}else if (salario <= 2594.92){
    salarioDescINSS -= salario * 0.09;
}else if (salario <= 5189.82){
    salarioDescINSS -= salario * 0.11;
}else{
    salarioDescINSS -= 570.88;
}

let descontoIrSalario = salarioDescINSS;
console.log(`Salario com desconto INSS R$${salarioDescINSS.toFixed(2)}`);
let irSalario;

if(descontoIrSalario <= 1903.98){
    descontoIrSalario = salarioDescINSS;
}else if(descontoIrSalario <= 2826.65){
    irSalario = (salarioDescINSS * 0.075) - 142.80;
    descontoIrSalario -= irSalario;
}else if(descontoIrSalario <= 3751.05){
    irSalario = (salarioDescINSS * 0.15) - 354.80;
    descontoIrSalario -= irSalario;
}else if(descontoIrSalario <= 4664.68){
    irSalario = (salarioDescINSS * 0.225) - 636.13;
    descontoIrSalario -= irSalario;
}else{
    irSalario = (salarioDescINSS * 0.275) - 869.36;
    descontoIrSalario -= irSalario;
}

console.log(`desconto IR R$${irSalario.toFixed(2)}`);
console.log(`Salario com desconto INSS e IR R$${descontoIrSalario.toFixed(2)}`);