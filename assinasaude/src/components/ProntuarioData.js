import React, { useState, useEffect } from "react";
import axios from "axios";

import Cadastro from "./forms/Cadastro";

const ProntuarioData = () => {
  const [queixas, setQueixas] = useState([]);
  const [doencas, setDoencas] = useState([]);

  const getData = () => {
    axios
      .all([
        axios.get("https://assina-prontuario.herokuapp.com/queixas"),
        axios.get("https://assina-prontuario.herokuapp.com/doencas"),
      ])
      .then((res) => {
        const queixaData = res[0].data;
        const doencaData = res[1].data;
        const queixaNames = queixaData.data;
        const doencaNames = doencaData.data;
        setQueixas(queixaNames);
        setDoencas(doencaNames);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Cadastro queixa={queixas} doenca={doencas} />
    </div>
  );
};

export default ProntuarioData;
