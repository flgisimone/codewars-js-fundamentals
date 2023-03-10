function reverseWords(str) {
    let reverse = str.split(" ").map(word => word.split("").reverse().join(""))
    return reverse.join(" ")
   }