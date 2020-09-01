import React from "react";

const Queixa = ({ queixa }) => {
  return (
    <div>
      <label htmlFor="queixa">Queixa Principal</label>
      <select name="queixa">
        <option value="">{queixa}</option>
      </select>
    </div>
  );
};

export default Queixa;
