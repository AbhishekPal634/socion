import React from "react";
import { TwitterData } from "./TwitterGraphs.jsx";

const TwitterDashboard = () => {
  return (
    <div className=" relative min-h-screen border-white overflow-hidden">
      <div className="p-6 overflow-y-auto">
        <TwitterData />
      </div>
    </div>
  );
};

export default TwitterDashboard;
