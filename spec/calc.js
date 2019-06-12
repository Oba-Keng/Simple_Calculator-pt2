module.exports = class Calculator{

constructor(){

    this.memory = [];

}

add(){

let sum = 0;

for(let i=0;i<arguments.length;i++){

    sum += arguments[i];  

}
this.total = sum;

return sum;
}

multiply(){

let sum = arguments[0];

for(let i=0;i<arguments.length;i++){
    
    sum *= arguments[i];  
    
 }
 this.total = sum;

    return sum;
}



last(){
 return this.total;
}

set_slot(slotNumber){

this.memory.push(this.last());
  
return this.memory[slotNumber-1];

}


get_slot(slotNumber){

return this.memory[slotNumber-1];

}

}



// let calculator = new Calculator();
// calculator.add(1,2,3,4,5)