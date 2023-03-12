function sumTwoSmallestNumbers(numbers) { 
    let array = []
    let sum = 0;
    const smallestNumber = numbers.sort((a, b) => a - b).slice(0, 2)
    array.push(smallestNumber)
    return sum = array[0][1] + array[0][0];
  }