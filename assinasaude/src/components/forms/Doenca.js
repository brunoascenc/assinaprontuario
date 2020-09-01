import React from "react";

const Doenca = ({ doenca }) => {
  return (
    <div>
      <label htmlFor="doenca">Doenças Adulto</label>
      <select name="doenca">
        <option value="">{doenca}</option>
      </select>
    </div>
  );
};

export default Doenca;
