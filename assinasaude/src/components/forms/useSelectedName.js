import { useState } from "react";
import _ from "lodash";

const useSelectedName = () => {
  const [selectedQueixa, setSelectedQueixa] = useState([]);
  const [doencaNames, setDoencaNames] = useState([]);

  const handleDoenca = (e) => {
    let values = [...e.target.selectedOptions].map((opt) => opt.value);
    const newNames = _.union(doencaNames, values);
    setDoencaNames([...newNames]);
  };

  const handleQueixa = (e) => {
    let valuesQueixa = [...e.target.selectedOptions].map((opt) => opt.value);
    const newQueixas = _.union(selectedQueixa, valuesQueixa);
    newQueixas.length = 1;
    setSelectedQueixa([...newQueixas]);
  };

  return [
    selectedQueixa,
    handleQueixa,
    handleDoenca,
    doencaNames,
    setDoencaNames,
    setSelectedQueixa
  ];
};

export default useSelectedName;
