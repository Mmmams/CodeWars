function nthFibo(n) {
    let arr =  [0,0,1,2];
    function fillArray(){
        arr.push((arr[arr.length-1]) + (arr[arr.length-2]))
        console.log(arr[arr.length-1])
        if(arr.length<=n){
        fillArray(arr.length)
        }
    }
    fillArray(arr.length)
    console.log(arr[n])
  }

  nthFibo(10)