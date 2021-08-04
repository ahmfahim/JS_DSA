// const friends = [];
// friends.push(44);
// friends.push(434);
// friends.push(4424);
// friends.push(64);
// friends.push(212);
// console.log('friends: ', friends);
// const getOne = friends.pop();
// console.log('getOne: ', getOne);
// console.log("after pop:",friends)

class Stack {
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(item){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add('Fahim');
guest.add('Mahim');
guest.add('Lahim');
guest.add('Rahim');
console.log('guest: ', guest.stack);

const speaker = guest.remove();
console.log('speaker:',speaker);
console.log('guest without speaker:', guest.stack);


