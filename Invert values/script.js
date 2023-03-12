function invert(array) {
    let arrayNew = [];

    for(let i = 0; i<array.length; i++)
      if(array[i]>=0 || array[i]<0){
        arrayNew.push(-array[i])
      }
    
    return arrayNew
  }