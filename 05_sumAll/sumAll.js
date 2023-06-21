const sumAll = function(n1, n2) {
    if(!Number.isInteger(n1) || !Number.isInteger(n2)) return 'ERROR';
    if(n1 < 0 || n2< 0) return "ERROR";
    if(n1> n2){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
   let sum = 0;
   for(let i = n1; i< n2 + 1; i++){
    sum += i;
   }
   return sum;

};

// Do not edit below this line
module.exports = sumAll;
