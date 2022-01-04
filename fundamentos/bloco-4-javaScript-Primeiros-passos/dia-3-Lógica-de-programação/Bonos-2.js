let num = 23;
let division = 0;
for(i = 1; i <= num; i += 1){
    let calc = num % i;
    if (calc == 0){
        division ++
    }
}
if(division == 2){
    console.log('Primo')
}else{
    console.log('Não e primo')
}