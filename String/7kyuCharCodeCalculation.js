function calc(x){
    function total1(str){
        let num = '';
        arr = str.split('');
        for(let i = 0; i< arr.length; i++){
            
            num += arr[i].charCodeAt();
        }
        return num;
    }

    function total2(str){
        num = total1(str);
        arr = num.split('');
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == '7'){
                arr[j] = '1';
            }  
        }
        num1 = num.split('').map(element => {
            return element = +element;   
        }).reduce((acc,item)=>{
             
            return acc += item
        });
        num2 = arr.map(element => {
            return element = +element;
        }).reduce((acc, item)=>{
            return acc += item
        });
        console.log(num1, num2)
        res = num1 - num2;
        return(res)
    }
    return total2(x);
}
calc('ABC')


