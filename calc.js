module.exports =
class Calculator {
  constructor() {
    this.memory = [];
    this.regex = /\d{1,5}/gm;
    
    this.total=0;
    // this.slot = "SlOT_1";
    
  }
  
  //function that returns the sum of added numbers
  add() {
    let result = 0;
    let digit;

    for (let i = 0; i < arguments.length; i++) 
    
      if(arguments[i]==="LAST"){
        
     result += parseInt(this.last());
     
      
      }else 
      if(arguments[i]!=="LAST" && arguments[i]==typeof('string')){
       if(arguments[i].match(this.regex)) {
        digit = this.arguments[i].match(regex)
        result += this.memory[arguments[digit[i]-1]]

       }
      }else{
        result += arguments[i];
      }
      this.total = result;

    return this.total;
    }
    
    

  //function that returns the sum of multiples
  multiply() {

    let result=1;
  
   
    for (let i = 0; i < arguments.length; i++) 
    
      if(arguments[i]==="LAST"){
          result *= parseInt(this.last());
      }
      else 
       if(arguments[i]!=="LAST"&&arguments[i]==typeof('string')){
         
           let digit = this.regex.test(arguments[i])
          result *= parseInt(this.memory[parseInt(digit) - 1])
          console.log(result);
        
        
      }else{
        result *= arguments[i];
        
      }
    this.total = result;
    return this.total;
    

  }
  last() {
    return parseInt(this.total);
  }
  
  //returns the last result
  
  //sets a slot number
  set_slot(slotNumber) {
    this.memory.push(this.last());

    return parseInt(this.memory[slotNumber - 1]);
  }
  //gets a slot number
  get_slot(slotNumber) {
    return parseInt(this.memory[slotNumber - 1]);
  }

  
}