import React, { useState, useEffect } from "react";
import axios from "axios";

import Cadastro from "./forms/Cadastro";

const ProntuarioData = () => {
  const [queixas, setQueixas] = useState([]);
  const [doencas, setDoencas] = useState([]);

  const getData = () => {
    const queixasAPI = "https://assina-prontuario.herokuapp.com/queixas";
    const doencasAPI = "https://assina-prontuario.herokuapp.com/doencas";

    const getQueixas = axios.get(queixasAPI);
    const getDoencas = axios.get(doencasAPI);
    axios.all([getQueixas, getDoencas]).then(
      axios.spread((...sintomasData) => {
        const queixaData = sintomasData[0].data;
        const doencaData = sintomasData[1].data;
        const queixaNames = queixaData.data[0].label;
        const doencaNames = doencaData.data[0].label;

        setQueixas(queixaNames);
        setDoencas(doencaNames);
      })
    );
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
