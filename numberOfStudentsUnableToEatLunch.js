
class Queue1 {

    constructor(){
        this.items = [];
    }

    enqueue(newItem){
        this.items.push(newItem);
    }

    dequeue(){
        this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    length(){
        return this.items.length;
    }

    printQueue(){
        console.log(this.items);
    }

    isEmpty(){
        return this.items.length === 0;
    }

    rejoinQueue(){
        let othersBehindFirst = this.items.slice(1);
        this.items = [...othersBehindFirst, this.items[0]];
    }
}

class Stack1 {
    constructor(){
        this.items = [];
    }

    pop(){
        this.items.pop();
    }

    push(newItem){
        this.items.push(newItem)
    }

    length(){
        return this.items.length
    }

    peek(){
        return this.items[this.items.length-1];
    }
}

var countStudents = function(students, sandwiches){

    let sandWichStack = new Stack1();
    let studentQueue = new Queue1();

    for (let i=sandwiches.length - 1; i>=0; i--){
        sandWichStack.push(sandwiches[i]);
    }

    for (let i=0; i<students.length; i++){
        studentQueue.enqueue(students[i]);
    }

    let repeater = 0;
    
    while (repeater < studentQueue.length()){
        if (sandWichStack.peek() === studentQueue.peek()){
            sandWichStack.pop();
            studentQueue.dequeue();
            repeater = 0;
        } else {
            studentQueue.rejoinQueue();
            repeater++
        }
    }
    console.log(studentQueue.length());
    return studentQueue.length();
}

let students = [1,1,1,0,0,1];
let sandwiches = [1,0,0,0,1,1];
countStudents(students, sandwiches);
