Comparing different Data Grid options based on some basic requirements

## Data grid basic requirements

- tailwind style
  - general table style
  - row
  - cell
- filtering
  - general filter
  - column filter
- sorting
- cell edit
- price

## Data grid option

|           | AG-Grid                                                                                                                                                                                  | MUI Data Grid                                                                                                                                                     | TanStack Table                                                                                                                                                                                                                                                                     | Ka-table                                                                                                                                                                                                                       | Grid.js                                                                                                                          | KendoReact Data Grid                                                                                                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tailwind  | - general table style: global css<br>- row: `rowClass` or `rowClassRules`<br>- cell: `cellClass` or `cellClassRules`<br>- easy, flexible and simple to style with tailwind or global css | - general table style: global css<br>- row: `getRowClassName`<br>- cell: `cellClassName`                                                                          | general table style, rows and cells can be styled as normal table components using css - it can probably be able to use classNames on 't' (table) component, but it will be a lot more verbose - [demo](https://tanstack.com/table/latest/docs/framework/react/examples/bootstrap) | general table style, rows and cells are not so simple to customize but can be done by [childComponents](https://ka-table.com/docs_ui.html#child-components) <br>- it is more verbose and harder to style an specific row/cell. | - general table style: [className](https://gridjs.io/docs/config/className)<br>- styling specific row or cell it is not possible | [can't use className only pure css](https://infinite-table.com/docs/learn/theming)                                                                                                               |
| filtering | - general filter<br> - `quickFilterText` param with `quickFilterText` state<br>- column filter<br> - no extra config is needed                                                           | - general filter<br> - possible with [quick filter](https://mui.com/x/react-data-grid/filtering/quick-filter/)<br>- column filter<br> - no extra config is needed | - general filter<br> - by using [global filtering](https://tanstack.com/table/latest/docs/api/features/global-filtering)<br>- column filter<br> - by using [column-filtering](https://tanstack.com/table/latest/docs/guide/column-filtering)                                       | - possible with [search](https://komarovalexander.github.io/ka-table/#/search)<br>- [header filter](https://komarovalexander.github.io/ka-table/#/header-filter)                                                               | - general filter using [search props](https://gridjs.io/docs/examples/search)<br>- column filter it's not possible               | - general filter<br> - possible with [Extending existing filters](https://infinite-table.com/docs/learn/filtering/extending-existing-filters)<br>- column filter<br> - no extra config is needed |
| sorting   | no extra config needed                                                                                                                                                                   | no extra config needed                                                                                                                                            | by using [sorting](https://tanstack.com/table/latest/docs/api/features/sorting)                                                                                                                                                                                                    | possible using param `sortingMode`                                                                                                                                                                                             | possible with [sort props](https://gridjs.io/docs/examples/sorting)                                                              | no extra config needed                                                                                                                                                                           |
| edit cell | can use `onCellEditingStopped`                                                                                                                                                           | can use `onCellEditStop`                                                                                                                                          | can be done, but it is more verbose as it has to create it's on input component config it to the column that should be editable - [demo](https://tanstack.com/table/latest/docs/framework/react/examples/editable-data)                                                            | can use `editableCells` param                                                                                                                                                                                                  | not available                                                                                                                    | can use [shouldAcceptEdit](https://infinite-table.com/docs/learn/editing/overview#finishing-an-edit)                                                                                             |
| price     | free for the basic required features                                                                                                                                                     | free                                                                                                                                                              | free                                                                                                                                                                                                                                                                               | free                                                                                                                                                                                                                           | free                                                                                                                             | [start from 395 per developer / year](https://infinite-table.com/pricing)                                                                                                                        |
| demo      | [demo](https://www.ag-grid.com/example)<br><br>`AGGrid.tsx`                                                                                                                              | [demo](https://mui.com/x/react-data-grid/demo/)<br><br>`MuiDataGrid.tsx`                                                                                          | [demo](https://tanstack.com/table/latest/docs/framework/react/examples/basic)                                                                                                                                                                                                     | [demo](https://komarovalexander.github.io/ka-table/#/overview)                                                                                                                                                                | [demo](https://gridjs.io/docs/examples/hello-worl)<br><br>`GridJS.tsx`                                                           | [demo](https://infinite-table.com/docs/learn/examples/performance-many-rows-and-columns)                                                                                                         |

### [AG-Grid](https://www.ag-grid.com/react-data-grid/getting-started/)

- tailwind style ✅
  - general table style: global css
  - row: `rowClass` or `rowClassRules`
  - cell: `cellClass` or `cellClassRules`
  - easy, flexible and simple to style with tailwind or global css
- filtering ✅
  - general filter
    - `quickFilterText` param with `quickFilterText` state
  - column filter
    - no extra config needed
- sorting ✅
  - no extra config needed
- cell edit ✅
  - can use `onCellEditingStopped`
- price 🎁
  - free for the basic required features
  - https://www.ag-grid.com/license-pricing/ - (community package)
- example at `app/AGGrid.tsx`

### [MUI Data Grid](https://mui.com/x/react-data-grid/)

- tailwind style ✅
  - general table style: global css
  - row: `getRowClassName`
  - cell: `cellClassName`
- filtering ✅
  - general filter
    - possible with [quick filter](https://mui.com/x/react-data-grid/filtering/quick-filter/)
  - column filter
    - no extra config needed
- sorting ✅
  - no extra config needed
- cell edit ✅
  - can use `onCellEditStop`
- price 🎁
  - free
- example at `app/MuiDataGrid.tsx`

### [TanStack Table](https://tanstack.com/table/latest)

- tailwind style
  - general table style, rows and cells can be style as normal table components using css - it can probably be able to use classNames on 't' (table) component, but it will be a lot more verbose - [demo](https://tanstack.com/table/latest/docs/framework/react/examples/bootstrap)
- filtering ✅
  - general filter
    - by using [global filtering](https://tanstack.com/table/latest/docs/api/features/global-filtering)
  - column filter
    - by using [column-filtering](https://tanstack.com/table/latest/docs/guide/column-filtering)
- sorting ✅
  - by using [sorting](https://tanstack.com/table/latest/docs/api/features/sorting)
- cell edit ✅
  - can be done, but it is more verbose as it has to create it's on input component config it to the column that should be editable - [demo](https://tanstack.com/table/latest/docs/framework/react/examples/editable-data)
- price 🎁
  - free
- [demos](https://tanstack.com/table/latest/docs/framework/react/examples/basic)

### [Ka-table](https://ka-table.com/)

- tailwind style ✅
  - general table style, rows and cells are not so simple to customize but can be done by [childComponents](https://ka-table.com/docs_ui.html#child-components) - it is more verbose and harder to style an specific row/cell.
- filtering ✅
  - general filter
    - possible with [search](https://komarovalexander.github.io/ka-table/#/search)
  - [header filter](https://komarovalexander.github.io/ka-table/#/header-filter)
- sorting ✅
  - possible using param `sortingMode`
- cell edit ✅
  - can use `editableCells` param
- price 🎁
  - free
- [demos](https://komarovalexander.github.io/ka-table/#/overview)

### [Grid.js](https://gridjs.io/)

- tailwind style
  - general table style: [className](https://gridjs.io/docs/config/className) ✅
  - styling specific row or cell it is not possible ❌
- filtering
  - general filter ✅
    - possible with [search props](https://gridjs.io/docs/examples/search)
  - column filter ❌
- sorting ✅
  - possible with [sort props](https://gridjs.io/docs/examples/sorting)
- cell edit ❌
- price 🎁
  - free
- example at `app/GridJS.tsx`

### [Infinite Table](https://infinite-table.com/docs)

- tailwind style ❌
  - [can't use className only pure css](https://infinite-table.com/docs/learn/theming)
- filtering ✅
  - general filter
    - possible with [Extending existing filters](https://infinite-table.com/docs/learn/filtering/extending-existing-filters)
  - column filter
    - no extra config needed
- sorting ✅
  - no extra config needed
- cell edit ✅
  - can use [shouldAcceptEdit](https://infinite-table.com/docs/learn/editing/overview#finishing-an-edit)
- price 💶
  - [start from 395 per developer / year](https://infinite-table.com/pricing)

### [KendoReact Data Grid](https://www.telerik.com/kendo-react-ui/components/grid/)

- tailwind style ✅
  - can use className, probably with some limitation
- filtering ✅
  - general filter
    - possible with [External Filtering with Input](https://www.telerik.com/kendo-react-ui/components/grid/filtering/#toc-external-filtering-with-input)
  - column filter
    - no extra config needed
- sorting ✅
  - no extra config needed
- cell edit ✅
  - can use `enterEdit` on `CellRender`
- price 💶
  - [start from 999 per developer](https://www.telerik.com/kendo-react-ui/pricing)

## Run project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can test and check some data grid examples by uncommenting the component on page `app/page.tsx`.
