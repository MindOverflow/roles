import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyleA = { left: 10 };
const handleStyleC = { left: 30 };

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="text">Привет! Введи своё имя:</label>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyleA} />
      <Handle type="source" position={Position.Bottom} id="b" />
      <Handle type="source" position={Position.Bottom} id="c" style={handleStyleC} />
    </div>
  );
}

export default TextUpdaterNode;