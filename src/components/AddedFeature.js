import React from 'react';

import { connect } from "react-redux";

import { deleteFeature } from "../actions/";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>props.deleteFeature(props.feature)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {deleteFeature}) (AddedFeature);

const mapStateToProps = state => {
  console.log('mapstatetoprops: ', state);
return {
  additionalPrice: state.additionalPrice, 
  car: state.car,
  additionalFeatures: state.additionalFeatures

}
}
