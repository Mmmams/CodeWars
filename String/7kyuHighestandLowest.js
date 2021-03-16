function highAndLow(numbers){
    let high = -100000;
    let low = 1000000;

    arr = numbers.split(' ').forEach(element => {
        element = +element
        console.log(high, low)
        if(element>high){
            high = element
        };
        if(element<low){
            low = element
        }
    });

    // function highAndLow(numbers){
    //     numbers = numbers.split(' ').map(Number);
    //     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
    //   }
  }

  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")