import React, { useRef, useState } from "react";
import Canvas from "../components/Canvas";
import Components from "../components/Components";
import { DndContext, DragOverlay } from "@dnd-kit/core";

const Builder = () => {
  const [activeDrag, setActiveDrag] = useState(null);
  // State to store dropped components
  const [items, setItems] = useState([]);
  const [layout, setLayout] = useState([]);
  const canvasRef = useRef();

  const handleDragStart = (event) => {
    setActiveDrag(event.active.id); // Show DragOverlay
  };

  const handleDragEnd = (event) => {
    const { active } = event;

    // Add to Canvas layout here if dropped inside Canvas
    if (event.over?.id === "canvas") {
      // We'll handle adding in Canvas.jsx
      // e.g., Canvas will expose a method to add a new component
      const newId = Date.now().toString();

      setItems((prev) => [
        ...prev,
        {
          id: newId,
          type: active.id,
        },
      ]);
      setLayout((prev) => [
        ...prev,
        {
          i: newId,
          x: 0,
          y: Infinity,
          w: 3,
          h: 2,
        },
      ]);
    }

    setActiveDrag(null); // Remove overlay
  };

  const handleDelete = (id) => {
    // remove from items
    setItems((prev) => prev.filter((item) => item.id !== id));

    // remove from layout
    setLayout((prev) => prev.filter((l) => l.i !== id));
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex h-screen w-full">
        {/* Canvas */}
        <Canvas
          id="canvas"
          items={items}
          layout={layout}
          setLayout={setLayout}
          onDelete={handleDelete}
        />

        {/* Sidebar */}
        <div className="w-64 bg-white p-4">
          <Components />
        </div>
      </div>

      {/* DragOverlay to show the component following cursor */}
      <DragOverlay>
        {activeDrag ? (
          <div className="p-2 border-2 border-blue-500 bg-white rounded">
            {activeDrag}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default Builder;
