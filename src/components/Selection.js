
import React, {useState} from "react";

function Selection(props) {
  const [stateVar,setStateVar]=useState({background:''});

  let handleClick =() =>{
    props.applyColor(setStateVar);
  }

  return <div 
          className="fix-box"
          style={stateVar}
          onClick={handleClick}
          >
            <h2 className="subheading">Selection</h2>
          </div>;
}
export default Selection;
