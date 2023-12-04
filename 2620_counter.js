function createCounter(initialValue) {
    let counter = initialValue;
  
    function increment() {
      return counter++;
    }
  
    return increment;
  }
  
  
  const myCounter = createCounter(2620);
  
  console.log(myCounter()); 
  console.log(myCounter()); 
  console.log(myCounter()); 
  
  