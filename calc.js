 module.exports =
class Calculator {
  constructor() {
    this.memory = [];
    this.regex = /\d+/g;
    this.total=0;
  }
  
  //function that returns the sum of added numbers
  add() {
    let result = 0;
    let digit;

    for (let i = 0; i < arguments.length; i++) 
    
      if(arguments[i]==="LAST"){
        
     result += parseInt(this.last());
     
      }else 
      if(arguments[i]!=="LAST" && typeof(arguments[i])=='string'){
        digit = arguments[i].match(this.regex)
        result += this.memory[parseInt(digit)-1]
       }else{
        result += arguments[i];
      }
      this.total = result;
      
      return parseInt(this.total);
    }
   
//function that returns the sum of multiples
  multiply() {

    let result=1;
    let digit;
   
    for (let i = 0; i < arguments.length; i++) 
    
      if(arguments[i]==="LAST"){
          result *= parseInt(this.last());
      }
      else 
       if(arguments[i]!=="LAST"&&typeof(arguments[i])=='string'){
         
          digit = arguments[i].match(this.regex)
          result *= this.memory[parseInt(digit) - 1]
        
        
      }else{
        result *= arguments[i];
        
      }
     this.total = result;
    return parseInt(this.total);
  }

  //returns the last result
  last() {
    return parseInt(this.total);
  }
  
  //sets a slot number
  set_slot(slotNumber) {
    this.memory.push(this.last());

    return parseInt(this.memory[slotNumber - 1]);
  }
  //gets a slot number
  get_slot(slotNumber) {
    return parseInt(this.memory[slotNumber - 1]);
  }

};

