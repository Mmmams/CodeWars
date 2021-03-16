function squares(x, n) {
    let arr = []
    if (n==0 || n<0){return[]}
    for(let i=0; i<n; i++){
            arr.push(x);
            console.log(x)
            x = Math.pow(x, 2)
            
        }
    
    console.log(arr);
}

squares(2,5)