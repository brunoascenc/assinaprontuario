import React from "react";
import Select from "react-select";


const Queixa = ({ queixa}) => {
  return (
    <div>
      <label htmlFor="queixa">Queixa Principal</label>
      <Select options={queixa} />
    </div>
  );
};

export default Queixa;
