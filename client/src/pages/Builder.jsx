import React from "react";
import Canvas from "../components/Canvas";

const Builder = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Canvas */}
      <Canvas />

      {/* Sidebar */}
      <div className="w-64 bg-white p-4">
        <h3 className="text-lg font-semibold">Components</h3>
      </div>
    </div>
  );
};

export default Builder;
