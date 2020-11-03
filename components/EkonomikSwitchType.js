import React, { useState, useContext, useEffect } from "react";
import SwitchContext from "../context/SwitchContext";
import { FETCH_INDIVIDUAL_SWITCH, SELECTED_SWITCH_TYPE } from '../context/types'
import fetch from "isomorphic-unfetch";

const EkonomikSwitchType = () => {
  const [switchTypes, setSwitchTypes] = useState([]);
  const { value, dispatch } = useContext(SwitchContext);


  const handleChange = (e) => {
    dispatch({type:SELECTED_SWITCH_TYPE, payload: e.target.value})
    dispatch({type:FETCH_INDIVIDUAL_SWITCH})
  }

  useEffect(() => {
    const fetchSwitchTypes = async () => {
      const response = await fetch(
        `https://tem-offer-roundboxes.herokuapp.com/ekonomik-switches`
      );
      const data = await response.json();
      setSwitchTypes(data);
    };
    fetchSwitchTypes();
  }, []);

  
  return (
    
     <select className=" bg-transparent appearance-none border-b border-yellow-600 text-gray-700" onChange={(e) => handleChange(e)}>
     
       {switchTypes.map( type => (
         <option key={type.id} value={type.description} > {type.description} </option>
       ))}
     </select>
    
  );
};

export default EkonomikSwitchType;
