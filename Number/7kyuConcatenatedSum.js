function checkConcatenatedSum(x, n){
    let a;
    x > 0 ? a = x : a = -x;
    numbers = String(a).split('')
    let sum = 0;
    for(let i = 0; i <= numbers.length; i++){
        item = numbers[i].repeat(n);
        item = Number.parseInt(item);
        console.log(item)
        x > 0 ? sum += item : sum = sum - item
        
    }

    if(sum==x){return true}else{return false}
}

checkConcatenatedSum(9141, 10)


// function checkConcatenatedSum(sum, n){
//     var abs = Math.abs(sum);
//     return abs === [...abs+""].reduce((s, d) => +d.repeat(n) + s, 0);
//   }