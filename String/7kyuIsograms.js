function isIsogram(str){
    if(str == " "){
      console.log('true')  
      return true   
      }
      counter = 0;
      arr = str.toLowerCase().split('');
      arr.forEach(element => {
          let indices = [];
         let idx = arr.indexOf(element); 
         while (idx != -1) {
          indices.push(idx);
          idx = arr.indexOf(element, idx + 1);
        }
        if(indices.length > 1){
            counter++;
        }else{
            return false
        }
      });
      if (counter>0){
          return false
      }else{
          return true
      }
  
  }


  isIsogram('abcc')