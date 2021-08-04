class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        return this.queue.shift();
    }
}

const lovers = new Queue();
lovers.enqueue("Fahim");
lovers.enqueue("Mahim");
lovers.enqueue("Lahim");
lovers.enqueue("Rahim"); 
lovers.enqueue("Xahim");

console.log("Lovers:", lovers.queue);

const newLover = lovers.dequeue();
console.log("Ex Lover:", newLover);
console.log("Dequeue:",lovers.queue);
