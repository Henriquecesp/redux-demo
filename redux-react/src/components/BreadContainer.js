import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBread } from "../redux";

function BreadContainer() {
  // const numOfBread = useSelector((state) => state.bread.numOfBread);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <h2>Num of Bread - {numOfBread} </h2> */}
      <button onClick={() => dispatch(buyBread())}>Buy Bread</button>
    </div>
  );
}

export default BreadContainer;
