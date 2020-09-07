import React, { useCallback, useState, useRef } from "react";

import useSintomasAPI from "./useSintomasAPI";
import Prontuario from "./Prontuario";

const SintomasOptions = ({ changeQueixa, changeDoenca }) => {
  const [queixa, doenca] = useSintomasAPI();
  const optionQueixas = useRef(null);
  const optionDoencas = useRef(null);
  const [bindQueixa, setBindQueixa] = useState([]);
  const [bindDoenca, setBindDoenca] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setBindQueixa(optionQueixas.current.value);
    setBindDoenca(optionDoencas.current.value);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="queixa">Queixa Principal</label>
        <select ref={optionQueixas} onChange={changeQueixa}>
          <option defaultValue>Selecione...</option>
          {queixa.map((item) => {
            return <option key={item.id}>{item.label}</option>;
          })}
        </select>

        <label htmlFor="doenca">Doenças Adulto</label>
        <select ref={optionDoencas} onChange={changeDoenca}>
          <option defaultValue>Selecione...</option>
          {doenca.map((item) => {
            return <option key={item.id}>{item.label}</option>;
          })}
        </select>
        <button>Enviar</button>
      </form>
      <Prontuario selectedQueixa={bindQueixa} selectedDoenca={bindDoenca} />
    </div>
  );
};

export default SintomasOptions;
