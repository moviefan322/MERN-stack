import React from "react";
import BarComp from "../components/BarComp";
import PieComp from "../components/PieComp";
import DoughnutComp from "../components/DoughnutComp";

function Charts() {
  return (
    <div>
      <>
        <div>
          <PieComp />
        </div>
        <div>
          <BarComp />
        </div>
        <div>
          <DoughnutComp />
        </div>
      </>
    </div>
  );
}

export default Charts;
