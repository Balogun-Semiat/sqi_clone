import React from "react";


const Student = (props) => {
  return (
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
    </div>
  )
}

export default Student