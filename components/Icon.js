import React from "react";
import { render } from "react-dom";
import * as FontAwesome from "react-icons/fa";

export default function Icon({ iconName, template }) {
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ margin: "auto" }}>{icon}</div>;
}
