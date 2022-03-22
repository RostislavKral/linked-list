class NodeEl {
    data: number;
    next: NodeEl;

    constructor(value: number, next: NodeEl | null) {
        this.data = value;
        this.next = next;
    }
}

export default NodeEl;
