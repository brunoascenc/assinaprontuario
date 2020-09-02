import React from "react";
import Doenca from "./Doenca";
import Queixa from "./Queixa";

const Cadastro = ({ queixa, doenca}) => {
  return (
    <form>
      <header>Anamnese</header>
      <Queixa queixa={queixa} />
      <Doenca doenca={doenca} />
      <span>Selecionados: </span>
      <div></div>
      <label htmlFor="historico">Histórico da Moléstia</label>
      <textarea name="historico" cols="30" rows="10"></textarea>
    </form>
  );
};

export default Cadastro;
