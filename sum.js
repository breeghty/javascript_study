function averBetter(array,nov){
let result;
for(let i=0;i<array.length;i++){
    result += array[i];
}
result = result/array.length;
console.log(result);

if(nov>result){
    console.log(`평균보다${nov-result}점 올랐네요!`);
}else if(nov<=result){
    console.log(`평균보다 ${result-nov}점이 떨어졌네요. 재수추천`);
}
}

averBetter([10,20,30,40,50],40);