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

  // const handleRemoveChip = (name) => {
  //   const newList = doencaNames.filter((item) => item !== name);

  //   setDoencaNames(newList);
  // };


  const handleQueixa = (event) => {
    setSelectedQueixa(event.target.value);
  };

  return [
    selectedQueixa,
    handleQueixa,
    handleDoenca,
    doencaNames,
    setDoencaNames
    // handleRemoveChip
  ];
};

export default useSelectedName;
