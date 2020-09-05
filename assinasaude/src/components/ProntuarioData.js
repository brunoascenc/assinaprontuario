import React from "react";

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
    handleRemoveChip,
  ] = useSelectedName();

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
            doencaNames.map((doencaName) => {
              return (
                <div className="item">
                  <p>{doencaName}</p>{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveChip(doencaName);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
          <div>
            {selectedQueixa}
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
