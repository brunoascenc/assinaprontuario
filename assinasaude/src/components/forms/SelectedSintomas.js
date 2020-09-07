import React from "react";

import useSelectedName from "./useSelectedName";
import SintomasOptions from "./SintomasOptions";
import Prontuario from "./Prontuario";

const SelectedSintomas = () => {
  const [
    selectedQueixa,
    handleQueixa,
    handleDoenca,
    doencaNames,
    setDoencaNames,
    setSelectedQueixa,
  ] = useSelectedName();

  const handleRemoveDoenca = (name) => {
    const newList = doencaNames.filter((item) => item !== name);
    setDoencaNames(newList);
  };

  const handleRemoveQueixa = (name) => {
    const newList2 = selectedQueixa.filter((item) => item !== name);
    setSelectedQueixa(newList2);
  };

  return (
    <div>
      <div>
        <SintomasOptions
          changeQueixa={handleQueixa}
          changeDoenca={handleDoenca}
        />
      </div>
      <h3>Sintomas: </h3>
      <div>
        {doencaNames.length > 0 &&
          doencaNames.map((item) => {
            return (
              <div key={item} className="item">
                <p>{item}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveDoenca(item);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        <div>
          {selectedQueixa.length <= 1 &&
            selectedQueixa.map((item) => {
              return (
                <div key={item} className="item">
                  <p>{item}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveQueixa(item);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SelectedSintomas;
