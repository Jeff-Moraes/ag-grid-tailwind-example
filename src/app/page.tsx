import React from "react";
import AGGrid from "./AGGrid";
import MuiDataGrid from "./MuiDataGrid";
import GridJS from "./GridJS";

export default function Home() {
  return (
    <main className="flex flex-col m-10">
      <AGGrid />
      <MuiDataGrid />
      <GridJS />
    </main>
  );
}
