import LinkedList from "./LinkedList";
import NodeEl from "./NodeEl";

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);

console.log(list.getLength());
console.log(list.toArray());
console.log(list.find(4));

list.pop();
list.pop();
list.pop();
console.log(list.toArray());
console.log(list.getLength());
console.log(list.find(1));

console.log(list.getTail());

console.log(list);
