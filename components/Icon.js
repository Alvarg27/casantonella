import React from "react";
import { render } from "react-dom";
import * as FontAwesome from "react-icons/fa";

export default function Icon({ iconName }) {
  const icon = React.createElement(FontAwesome[iconName]);
  return <div>{icon}</div>;
}
