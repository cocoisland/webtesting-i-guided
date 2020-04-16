module.exports = {
  add,
};

function add(...args) {
  if (args.length === 0) {
    return 0;
  } else {
    let sum=0;
    for (let arg of args) {
      if (isNumber(arg)){
        sum += arg
      } else {
        throw new Error("All arguments need to be numbers")
      }
    }
    return sum;
  }
  
}

/* function add(...args) {
  if (args.length === 0){
    return 0;
  } else {
    return args.reduce((accumulator, current)=>{
      accumulator += current 
    })
} */

/* function add(a=0, b=0) {
  if (isNumber(a) && isNumber(b)){
    return a + b;
  } else {
    throw new Error("Both arguments need to be numbers")
  }

} */

function isNumber(val){
  return !isNaN(parseFloat(val)) && isFinite(val)
}
