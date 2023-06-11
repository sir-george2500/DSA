/**
 * The Stack data structure look almost like a stack of book 
 * where each book are store on top of the next you be able to pop
 * which mean take one book out of the stack , you can also be able to 
 * push which mean add one book on top of the stack.
 * you can also be able to peek this means look at the last book in 
 * the stack
 */


var Stack = function (){
    //count and Storage
    this.count = 0;
    this.storage = {};

    //method to push item on top of the stack
    this.push = function(value){
      this.storage[this.count]= value;
      this.count++;
    }

    //method to remove item from the stack pop

    this.pop = function(){
        //edge cases 
        if(this.count===0) return undefined;

        this.count--;
       let result = this.storage[this.count];
       delete this.storage[this.count];
       return result;
    }

    //method to peek item fromt the stack

    this.peek = function (){
        return this.storage[this.count-1]
    }

    this.print = function(){
        let count = 0;
        let head = this.count; 

        while(count<head){
            console.log(this.storage[count]);
            count++
        }
    }
}


var stack = new Stack();

stack.push(1);
stack.push(2);

stack.pop();

//print the Stack
stack.print();
