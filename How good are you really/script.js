function betterThanAverage(classPoints, yourPoints) {
  
    let sum = 0;
    classPoints.push(yourPoints)
    
    for(let i = 0; i<classPoints.length; i++){
      sum = sum + classPoints[i]
    }
    
    const average = sum / classPoints.length;
    
      if(yourPoints > average){
        return true;
      } else{
        return false;
      }
  }