function getGrade (s1, s2, s3) {

    const average = (s1+s2+s3) / 3;
    if(average >= 90 && average <= 100) return "A"
    if(average >= 80 && average <= 90) return "B"
    if(average >= 70 && average <= 80) return "C"
    if(average >= 60 && average <= 70) return "D"
    if(average >= 0 && average <= 60) return "F"
    
  }