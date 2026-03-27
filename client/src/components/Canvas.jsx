import React, { useState } from "react";
import GridLayout from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Canvas = () => {
  //   const ResponsiveGridLayout = WidthProvider(GridLayout);

  const [layout, setLayout] = useState([
    { i: "1", x: 0, y: 0, w: 3, h: 2 },
    { i: "2", x: 3, y: 0, w: 3, h: 2 },
  ]);

  return (
    <div className="flex-1 bg-gray-100 p-4 border-r h-screen overflow-auto">
      <h3 className="text-lg font-semibold mb-4">Canvas</h3>

      <GridLayout
        layout={layout}
        cols={12}
        rowHeight={60}
        width={1050}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            className="bg-white border rounded shadow flex items-center justify-center"
          >
            {item.i}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default Canvas;
