"use client";

import React, { useState } from "react";
import { ColDef } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

// Row Data Interface
interface IRow {
  name: string;
  floor: number;
  area: number;
  rooms: number;
  price: number;
  exitPrice: number;
  rent: number;
  newRent: number;
  isVacant: boolean;
  uWert: number;
}

// Row Data: The data to be displayed.
const rowData: IRow[] = [
  {
    name: "Meine Wohnung 1",
    floor: 1,
    area: 70,
    rooms: 1,
    price: 300000,
    exitPrice: 500000,
    rent: 700,
    newRent: 1200,
    isVacant: false,
    uWert: 0.7,
  },
  {
    name: "Meine Wohnung 2",
    floor: 2,
    area: 80,
    rooms: 2,
    price: 400000,
    exitPrice: 600000,
    rent: 800,
    newRent: 1300,
    isVacant: false,
    uWert: 0.9,
  },
  {
    name: "Meine Wohnung 3",
    floor: 3,
    area: 90,
    rooms: 3,
    price: 500000,
    exitPrice: 700000,
    rent: 900,
    newRent: 1400,
    isVacant: false,
    uWert: 0.8,
  },
  {
    name: "Meine Wohnung 4",
    floor: 5,
    area: 110,
    rooms: 4,
    price: 600000,
    exitPrice: 800000,
    rent: 1100,
    newRent: 1700,
    isVacant: true,
    uWert: 0.9,
  },
];

// Column Definitions: Defines & controls grid columns.
const colDefs: ColDef<IRow>[] = [
  {
    field: "name",
    headerName: "Name",
    filter: "agTextColumnFilter",
    editable: true,
    cellEditor: "agTextCellEditor",
  },
  {
    field: "floor",
    headerName: "Floor",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "area",
    headerName: "Area",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "rooms",
    headerName: "Rooms",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "price",
    headerName: "Price ()",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "exitPrice",
    headerName: "Exit price",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "rent",
    headerName: "Rent",
    filter: "agNumberColumnFilter",
    editable: true,
  },
  {
    field: "newRent",
    headerName: "New rent",
    filter: "agNumberColumnFilter",
    editable: true,
    headerClass: "bg-red-200",
  },
  {
    field: "isVacant",
    headerName: "Is vacant",
    filter: "agBooleanColumnFilter",
    editable: true,
    cellEditor: "agBooleanCellEditor",
    // cellClassRules is used to apply conditional classes to cell
    // https://www.ag-grid.com/react-data-grid/cell-styles/#cell-class-rules
    // cellClassRules: {
    //   "bg-green-500": (params) => params.value,
    //   "bg-red-500": (params) => !params.value,
    // },
  },
  {
    field: "uWert",
    headerName: "U-Wert",
    filter: "agNumberColumnFilter",
    // cellClass is used to apply classes to cell
    // https://www.ag-grid.com/react-data-grid/cell-styles/#reference-styling-cellClass
    // cellClass: (p) =>
    //   p.data?.uWert && p.data?.uWert >= 0.9 ? "text-green-500" : null,
  },
];

export default function AGGrid() {
  const [quickFilterText, setQuickFilterText] = useState<string>("");

  return (
    <>
      <div className="m-4">
        <input
          type="text"
          id="quickFilter"
          className="p-2 rounded-md"
          onChange={(event) => setQuickFilterText(event.target.value)}
          placeholder="Type text to filter..."
        />
      </div>
      <AgGridReact
        // className can be used to apply the ag-grid theme
        className="ag-theme-quartz-dark"
        containerStyle={{ height: "500px", width: "100%" }}
        // domLayout='autoHeight'

        rowData={rowData}
        columnDefs={colDefs}
        // Simple attributes
        rowSelection="multiple"
        // quickFilterText is used to filter rows based on text
        // https://www.ag-grid.com/react-data-grid/filter-quick/
        quickFilterText={quickFilterText}
        // rowClass is used to apply classes all rows
        // https://www.ag-grid.com/react-data-grid/row-styles/#reference-styling-rowClass
        // rowClass="bg-white"

        // https://www.ag-grid.com/react-data-grid/row-styles/#reference-styling-getRowClass
        // getRowClass={(params) => {
        //   return params.data?.uWert && params.data?.uWert >= 0.9
        //     ? "bg-green-500"
        //     : null;
        // }}

        // rowClassRules is used to apply conditional classes to row
        // https://www.ag-grid.com/react-data-grid//grid-options/#reference-styling-rowClassRules
        // rowClassRules={{
        //  "bg-red-500": (p) => p.data?.uWert && p.data?.uWert >= 0.9,
        //  "bg-cyan-700": (p) => p.data?.uWert && p.data?.uWert < 0.9,
        // }}

        // onCellEditingStopped is used to capture cell editing stopped event
        // it can be used to trigger the update of the data in the backend
        // https://www.ag-grid.com/react-data-grid//grid-events/#reference-editing-cellEditingStopped
        onCellEditingStopped={(event) => {
          console.log("Cell Editing Stopped: ", event.value);
        }}
      />
    </>
  );
}
