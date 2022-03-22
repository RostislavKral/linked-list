import NodeEl from './NodeEl';

interface IList {

    getHead(): NodeEl;
    add(node: NodeEl):void;
}

export default IList;
