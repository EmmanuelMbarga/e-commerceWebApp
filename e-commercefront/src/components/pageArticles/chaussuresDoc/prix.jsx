import React from "react";

const Prix = (props) => {
  return (
    <div className="text-center my-2 text-sm">
      <button className="border p-2">{props.min}</button>
      <span className="mx-4">-</span>
      <button className="border p-2">{props.max}</button>
    </div>
  );
};

export default Prix;
