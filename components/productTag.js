import React from "react";

export default function productTag({ color, title, background }) {
  return (
    <div
      style={{
        background: background,
        fontSize: "10px",
        display: "inline-block",
        color: color,
        borderRadius: "3px",
        padding: "4px 4px",
        margin: "5px 5px 0 0",
      }}
    >
      {title}
    </div>
  );
}
