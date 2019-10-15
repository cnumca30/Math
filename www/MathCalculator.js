var exec = require('cordova/exec');

 
module.exports.add=function(arf0,success,error){
    exec(success,error,'MathCalculator','add',[arg0])
}

module.exports.substract=function(arf0,success,error){
    exec(success,error,'MathCalculator','substract',[arg0])
}



