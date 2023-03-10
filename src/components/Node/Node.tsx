import {useEffect} from "react";
import {NodeProps} from "../../type/types"

const Node = ({
                  value,
                  left,
                  right,
                  className,
                  level,
                  maxLevel,
                  setMaxLevel,
              }: NodeProps) => {


    const margin = 5 * 2 ** (maxLevel - level);
    const scale = 0.97 ** (maxLevel - level);
    console.log(scale, 'level');
    useEffect(() => {
        setMaxLevel((prev) => (prev < level ? level : prev));
    });

    return (
        <div
            className={`node ${className}`}
            style={{ marginRight: -margin, marginLeft: -margin, transform: `scale(${scale})` }}
        >
            <span className="value">{value}</span>
            {left && (
                <Node
                    {...left}
                    className={'left'}
                    level={level + 1}
                    maxLevel={maxLevel}
                    setMaxLevel={setMaxLevel}
                />
            )}
            {right && (
                <Node
                    {...right}
                    className={'right'}
                    level={level + 1}
                    maxLevel={maxLevel}
                    setMaxLevel={setMaxLevel}
                />
            )}
        </div>
    );
};
export default Node