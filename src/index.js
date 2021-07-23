import React from "react";
import ReactDOM from "react-dom";
import PI, { doublePie, triplePie } from "./math";
// import * as PI from "./math"

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doublePie()}</li>
    <li>{triplePie()}</li>
  </ul>,
  document.getElementById("root")
);
