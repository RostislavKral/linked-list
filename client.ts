import LinkedList from "./LinkedList";
import NodeEl from "./NodeEl";

const list = new LinkedList();

const node = new NodeEl(2, null);

list.add(node);

const node1 = new NodeEl(3, null);

list.add(node1);
const node2 = new NodeEl(4, null);

list.add(node2);
console.log(list);
