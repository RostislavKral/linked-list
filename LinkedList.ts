import IList from "./IList";
import NodeEl from "./NodeEl";

class LinkedList implements IList{
    private head: NodeEl;

    constructor() {
        this.head = null;
    }

    toArray(): Array<number> {
        let arr = [];
        let temp : NodeEl|null = this.head;

        while (temp !== null) {
            arr.push(temp.data);
            temp = temp.next;
        }

        return arr;
    }

    push(val: number): void {
        let temp : NodeEl|null = this.head;
        const node = new NodeEl(val, null);

        if (temp === null) {
            this.head = node;
            return;
        }


        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = node;

    }

    pop(): void {
        let temp = this.head;

        if (temp === null) {
            return;
        }
        if (temp.next === null) {
            this.head = null;
            return;
        }

        while (temp.next.next !== null) {
            temp = temp.next;

        }

        temp.next = null;

    }


    getLength(): number {
        let counter = 1;
        let temp = this.head;

        if (temp === null) return 0;

        while (temp.next !== null) {
            temp = temp.next;
            counter++
        }

        return counter;

    }

    getTail():  NodeEl | null {
        let temp = this.head;

        if (temp === null) return null;

        while (temp.next !== null) {
            temp = temp.next;
        }

        return temp;
    }

    getHead(): NodeEl | null {
        return this.head;
    }
}

export default LinkedList;
