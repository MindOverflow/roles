// import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyleA = { left: 10, background: '#228B22' };
const handleStyleB = { left: 20, background: '#FFD700' };
const handleStyleC = { left: 30, background: '#DC143C' };

function TextUpdaterNode({ data }) {
  console.log('data =', data)
//   const onChange = useCallback((evt) => {
//     console.log(evt.target.value);
//   }, []);

  return (
    <div className="text-updater-node">
      <div>
        <label>{ data.value }</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyleA} />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyleB} />
      <Handle type="source" position={Position.Bottom} id="c" style={handleStyleC} />
    </div>
  );
}

export default TextUpdaterNode;