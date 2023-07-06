import Queue from "./queue.js";

const queue = new Queue();
console.log(queue.isEmpty())

queue.enqueue("Joao")
queue.enqueue("Vitor");

queue.dequeue()

console.log(queue.toString())

queue.enqueue("Pereira")

console.log(queue.toString())

queue.dequeue()
console.log(queue.isEmpty())

queue.dequeue()
console.log(queue.isEmpty())

