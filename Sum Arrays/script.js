function sum (numbers) {
  let sum = 0;
  
  if(numbers.length < 1){
    return 0;
  } else{
    for(let i = 0; i < numbers.length; i++){
      sum = sum+numbers[i];
    }
  
  return sum;
  }    
};
