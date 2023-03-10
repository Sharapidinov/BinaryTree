import { useState,  KeyboardEvent } from 'react';
import "../index.css"
import {NodeProps} from "../../type/types"
import Node from "../Node/Node"
import useKeyPress from "../../hooks/useKeyPress";

const BinaryTree = () => {
    const [tree, setTree] = useState<NodeProps | null>(null);
    const [maxLevel, setMaxLevel] = useState<number>(1);

    console.log(tree);
    const addNode = (node: NodeProps | null, value: number): NodeProps => {
        if (!node) {
            return { value, left: null, right: null, className: '', level: 0, maxLevel: 0, setMaxLevel: () => {} };
        }

        if (value < node.value) {
            return { ...node, left: addNode(node.left, value) };
        }

        if (value > node.value) {
            return { ...node, right: addNode(node.right, value) };
        }

        return node;
    };

    const handleSpace = () => {
            const value = Math.floor(Math.random() * 201) - 100;
            const newTree = addNode(tree, value);
            setTree(newTree);

    };


    const rootLevel = 1;
    useKeyPress('Space', handleSpace);

    return (
        <div  className="tree">
            <button onClick={handleSpace}>Add a new node by pressing Space</button>
            <div className="binary-search-tree">
                {tree && (
                    <Node
                        {...tree}
                        level={rootLevel}
                        setMaxLevel={setMaxLevel}
                        maxLevel={maxLevel}
                    />
                )}
            </div>
        </div>
    );
};

export default BinaryTree;