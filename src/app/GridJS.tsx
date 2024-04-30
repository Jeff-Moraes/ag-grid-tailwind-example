"use client";

import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";

export default function GridJS() {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ["Name", "Email", "Phone Number"],
    search: true,
    sort: true,
    data: [
      ["John", "john@example.com", "(353) 01 222 3333"],
      ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
      ["Eoin", "eo3n@yahoo.com", "(05) 10 878 5554"],
      ["Nisen", "nis900@gmail.com", "313 333 1923"],
    ],
  });

  useEffect(() => {
    if (!wrapperRef?.current) return;
    grid.render(wrapperRef?.current);
  }, [wrapperRef.current]);

  return <div ref={wrapperRef} />;
}
