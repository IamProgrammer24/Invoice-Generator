import React, { useState, useImperativeHandle } from "react";
import GridLayout from "react-grid-layout";
import { useDroppable } from "@dnd-kit/core";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { Trash2 } from "lucide-react";

const Canvas = ({ id, items, layout, setLayout, onDelete }) => {
  //   const ResponsiveGridLayout = WidthProvider(GridLayout);
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      className="flex-1 bg-gray-100 p-4 border-r h-screen overflow-auto"
      ref={setNodeRef}
    >
      <h3 className="text-lg font-semibold mb-4">Canvas</h3>

      <GridLayout
        layout={layout}
        cols={12}
        rowHeight={60}
        width={1050}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {layout.map((lay) => {
          const item = items.find((it) => it.id === lay.i);

          return (
            <div
              key={lay.i}
              className="group relative bg-white border rounded shadow flex items-center justify-center"
            >
              {/* ❌ Delete button (visible on hover) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(lay.i);
                }}
                className="absolute top-1 right-1 hidden group-hover:flex items-center justify-center p-1 rounded hover:bg-gray-200 cursor-pointer"
              >
                <Trash2
                  size={16}
                  className="text-gray-500 hover:text-red-500"
                />
              </button>

              {item?.type}
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default Canvas;
