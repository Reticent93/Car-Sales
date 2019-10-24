import React,  {useState} from 'react';
import {connect} from 'react-redux'
import {addFeature} from '../actions/title'

const AdditionalFeature = props => {
  const [newItem, setNewItem] = useState()
  const handleChanges = e => {
    e.preventDefault();
    props.addFeature()
    setNewItem('')
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleChanges}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
