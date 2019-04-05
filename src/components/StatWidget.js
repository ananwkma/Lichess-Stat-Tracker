import React from "react";
import Stats from "./Stats";
import Profile from "./Profile";
import Switch from "./Switch";

function StatWidget() {
  return (
    <div className="StatWidget">
      <h1>CHESS STATS</h1>
      <Profile />
      <hr />
      <Stats />
      <hr />
      <Switch />
    </div>
  );
}

export default StatWidget;
