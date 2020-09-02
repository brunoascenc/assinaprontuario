import React from "react";
import Select from "react-select";

const Doenca = ({ doenca}) => {
  return (
    <div>
      <label htmlFor="doenca">Doenças Adulto</label>
      <Select options={doenca} />
    </div>
  );
};

export default Doenca;
