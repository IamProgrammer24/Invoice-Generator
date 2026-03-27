import React from "react";
import { useDraggable } from "@dnd-kit/core";

const DraggableComponent = ({ id, name }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        padding: "8px 12px",
        margin: "5px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        background: "#f9f9f9",
        cursor: "grab",
      }}
    >
      {name}
    </div>
  );
};

const Components = () => {
  const componentList = [
    "Text",
    "Text Input",
    "Dropdown",
    "Button",
    "Table",
    "Key Value Map",
    "Container",
    "Tabbed Container",
    "Form",
    "JSON Schema Form",
    "Image",
    "Alert",
  ];

  return (
    <div className="p-4 border-r border-gray-300 w-64 h-full overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Components</h3>
      {componentList.map((comp) => (
        <DraggableComponent key={comp} id={comp} name={comp} />
      ))}
    </div>
  );
};

export default Components;
