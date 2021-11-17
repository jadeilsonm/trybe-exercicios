let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem-vinda, ${info.personagem}`);
console.log('#'.repeat(20));
info['recorrente'] = 'Sim';
console.log(info);
console.log('#'.repeat(20));
for (const chave in info) {
  console.log(chave);
  
} 
console.log('#'.repeat(20));
for (const chave in info) {
  console.log(info[chave]);  
} 
console.log('#'.repeat(20));
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};
info2['recorrente'] = 'Sim';
for (const chaves in info) {
  if(info[chaves] === info2[chaves]){
    console.log('Ambos recorrentes');
    continue;
  }
  console.log(info[chaves]+' e '+info2[chaves]);
}
