let n = 7;
for(i = 1;i <= n;i += 2){
    if((i != 1) & (i % 2 != 0) & (i != n) ){console.log(' '.repeat((n-i)/2)+'*'+' '.repeat(i-2)+'*')}
    else{
        console.log(' '.repeat((n-i)/2)+'*'.repeat(i))
    }
}