

export interface NodeProps {
    value: number;
    left: NodeProps | null;
    right: NodeProps | null;
    className: string;
    level: number;
    maxLevel: number;
    setMaxLevel: React.Dispatch<React.SetStateAction<number>>;
}