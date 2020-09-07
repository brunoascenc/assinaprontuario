import React, { useState, useRef, useCallback } from "react";

import "../App.css";
import SelectedSintomas from "./forms/SelectedSintomas";

const ProntuarioData = () => {
  const minCharacters = useRef(null);
  const [minChars, setMinChars] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (minCharacters.current.value.length < 5) {
      setMinChars("min 20");
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <header>Anamnese</header>
        <SelectedSintomas />
        <label htmlFor="historico">Histórico da Moléstia</label>
        <textarea
          ref={minCharacters}
          name="historico"
          cols="30"
          rows="10"
        ></textarea>
        {minChars}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ProntuarioData;
