import React, { useState } from "react";

import "../App.css";
import useSintomasAPI from "./forms/useSintomasAPI";
import useSelectedName from "./forms/useSelectedName";
// import Prontuario from './forms/Prontuario'

const ProntuarioData = () => {
  const [queixa, doenca] = useSintomasAPI();
  const [
    selectedQueixa,
    handleQueixa,
    handleDoenca,
    doencaNames,
    setDoencaNames,
    // handleRemoveChip
  ] = useSelectedName();

  const handleRemoveDoenca = (name) => {
    const newList = doencaNames.filter((item) => item !== name);

    setDoencaNames(newList);
  };

  return (
    <div>
      <form>
        <header>Anamnese</header>
        <div>
          <label htmlFor="queixa">Queixa Principal</label>
          <select onChange={handleQueixa}>
            <option defaultValue>Selecione...</option>
            {queixa.map((item) => {
              return <option key={item.id}>{item.label}</option>;
            })}
          </select>

          <label htmlFor="doenca">Doenças Adulto</label>
          <select onChange={handleDoenca}>
            <option defaultValue>Selecione...</option>
            {doenca.map((item) => {
              return <option key={item.id}>{item.label}</option>;
            })}
          </select>
        </div>
        <h3>Sintomas: </h3>
        <div>
          {doencaNames.length > 0 &&
            doencaNames.map((item) => {
              return (
                <div className="item">
                  <p>{item}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveDoenca(item)
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
          <div>
            <p>{selectedQueixa}</p>
            {/* {inputValue} */}
            {/* {doencaNames} */}
          </div>
        </div>
        <label htmlFor="historico">Histórico da Moléstia</label>
        <textarea name="historico" cols="30" rows="10"></textarea>
        <button>Enviar</button>
      </form>
      {/* <Prontuario
        selectedQueixa={selectedQueixa}
        selectedDoenca={doencaNames}
      /> */}
    </div>
  );
};

export default ProntuarioData;
