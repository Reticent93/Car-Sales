import React, {useState} from 'react';
import {connect} from 'react-redux'
import { addFeature, deleteFunction} from '../actions/title'

const AddedFeature = props => {
  


  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteFunction()
    }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
    
      <button className="button" onClick={handleDelete}>X</button>
      {props.feature.name}
    </li>
  );
};

function mapStateToProps(state) {
  return {
    title: state.title,
    add: state.add
  }
}

export default AddedFeature;

