import React from "react";
import { connect } from "react-redux";
import { buyCake, buyBread } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>
        {props.cake ? "Cake" : "Bread"} : {props.item}
      </h2>
      <button onClick={props.buyItem}>
        Buy {props.cake ? "Cake" : "Bread"}
      </button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.bread.numOfBread;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyBread());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
