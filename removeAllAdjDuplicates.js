/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    
    let stack = new Stack();

    for (let char of s){
        if (stack.length() === 0){
            stack.push(char);
        } else if (stack.length() > 0) {
            if(stack.peek() === char){
                stack.pop(); //so u pop, and dont push in hence both gone
            } else {
                stack.push(char);
            }
        }
    }
    const result = stack.items.join("");
    console.log(result);
    console.log(stack.length())
    return result;
};

class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length == 0){
            return "underflow";
        }
        return this.items.pop();
    }
    
    peek(){
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    length(){
        return this.items.length;
    }

}

removeDuplicates("abbaca");