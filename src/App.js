import { useState } from "react";
import ReactFlow from "react-flow-renderer";

import LabelRole from "./LabelRole";

const initialNodes = [
  { id: "1", type: "input", data: { label: "Input Node" }, position: { x: 250, y: 25 } },
  /* you can also pass a React component as a label */
  { id: "2", data: { label: <LabelRole /> }, position: { x: 100, y: 125 }},
  { id: "3", data: { label: "Output Node" }, position: { x: 250, y: 250 }},
  { id: "4", data: { label: "Node 4" }, position: { x: 350, y: 350 }}
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true }
];

function Flow() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return <ReactFlow nodes={nodes} edges={edges} fitView />;
}

export default Flow;