import React from "react";
import { render } from "react-dom";
import { FaWineBottle } from "react-icons/fa";

export default function Icon({ iconName, template }) {
  const icon = React.createElement(iconName);
  return <div style={{ margin: "auto" }}>{icon}</div>;
}
