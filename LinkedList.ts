import IList from "./IList";
import NodeEl from "./NodeEl";

class LinkedList implements IList{
    private readonly head: NodeEl;

    constructor() {
        this.head = new NodeEl(1, null);
    }

    add(node: NodeEl): void {
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = node;

    }

    getHead(): NodeEl | null {
        return this.head;
    }
}

export default LinkedList;
