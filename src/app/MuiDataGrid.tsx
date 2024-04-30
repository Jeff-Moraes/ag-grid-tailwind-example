"use client";

import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import {
  randomCreatedDate,
  randomTraderName,
  randomUpdatedDate,
} from "@mui/x-data-grid-generator";

export default function MuiDataGrid() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 350, width: "100%" }}>
        <DataGrid
          columns={columns}
          rows={rows}
          getCellClassName={() => "bg-red"}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </div>
    </div>
  );
}

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 180,
    editable: true,
    filterable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: true,
    align: "left",
    headerAlign: "left",
    filterable: true,
  },
  {
    field: "dateCreated",
    headerName: "Date Created",
    type: "date",
    width: 180,
    // https://mui.com/x/react-data-grid/editing/#full-featured-crud
    editable: true,
    cellClassName: "bg-blue-200",
  },
  {
    field: "lastLogin",
    headerName: "Last Login",
    type: "dateTime",
    width: 220,
    editable: true,
  },
];

const rows: GridRowsProp = [
  {
    id: 1,
    name: randomTraderName(),
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: randomTraderName(),
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: randomTraderName(),
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: randomTraderName(),
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: randomTraderName(),
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];