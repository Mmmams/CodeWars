var FilterString = function(value) {
let numbers={
    '1' : '1',
    '2' : '2',
    '3' : '3',
    '4' : '4',
    '5' : '5',
    '6' : '6',
    '7' : '7',
    '8' : '8',
    '9' : '9',
    '0' : '0'
}
let res = ''
    numArr = value.split('').forEach(element => {
        console.log(element)
        if(numbers[element]){
            res = res + element
        }
    });
    console.log(res)
}
  FilterString("a10200")

//   var FilterString = function(value) {
//     return +value.split('').filter(n => !isNaN(n)).join('');
//   }