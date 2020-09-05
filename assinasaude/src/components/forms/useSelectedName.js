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

  const handleRemoveChip = (name) => {
    setDoencaNames(doencaNames.filter((item) => item.name !== name));
  };

  const handleQueixa = (event) => {
    setSelectedQueixa(event.target.value);
  };

  return [
    selectedQueixa,
    handleQueixa,
    handleDoenca,
    doencaNames,
    handleRemoveChip,
  ];
};

export default useSelectedName;
