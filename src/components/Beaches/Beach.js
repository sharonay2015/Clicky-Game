import React from "react";
import "./Beach.css";

const Beach = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.shuffle(props.id)}>
    <img alt={props.name} src={props.image} />
    {/* <span onClick={() => props.shuffle(props.id)}>
    <img alt={props.name} src={props.image} />
    
    </span> */}
    </div>
    <div className="content">
      
    </div>
   {/* <span onClick={() => props.Increment(props.id)} className="remove">
   Click
    </span> */}
  </div>
);

export default Beach;
