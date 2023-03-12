function abbrevName(name){
    const words = name.match(/\b(\w)/g);
    const acronym = words.join('.')
    return acronym.toUpperCase();
  }