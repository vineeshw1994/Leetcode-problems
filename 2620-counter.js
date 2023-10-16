var createCounter = function(n) {
    
    return function(s) {
        const sum = n + s
        return sum 
    };
};

const addTwo = createCounter(50)
 const result = addTwo(50) ;
 console.log(result);