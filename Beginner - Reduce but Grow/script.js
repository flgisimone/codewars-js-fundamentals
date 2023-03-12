function grow(x){
    let mult = 1;
    for(let i = 0; i<x.length; i++){
      mult = mult*x[i];
    }
    return mult;
  }