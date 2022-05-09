import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import db from "./db.json";
import { COLUMNS } from "./columns";
import { Checkbox } from "./checkbox";
import "./table.css";

function Productlist() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => db, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    state,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
          </li>
          {allColumns.map((column) => (
            <li key={column.id} className="dropdown-item">
              <label>
                <input type="checkbox" {...column.getToggleHiddenProps()} />
                {column.Header}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button onClick={() => previousPage()} className="btn btn-secondary">
          Previous
        </button>
        <button onClick={() => nextPage()} className="btn btn-secondary">
          Next
        </button>
      </div>
    </>
  );
}

export default Productlist;
