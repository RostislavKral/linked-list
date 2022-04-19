import NodeEl from './NodeEl';

interface IList {

    getHead(): NodeEl;
    push(val: number):void;
    pop():void;
    toArray():Array<number>;
    getTail():NodeEl;
    getLength():number;
}

export default IList;
