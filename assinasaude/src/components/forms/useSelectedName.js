import { useState } from "react";

const useSelectedName = () => {
  const [selectedQueixa, setSelectedQueixa] = useState([]);
  const [selectedDoenca, setSelectedDoenca] = useState([]);

  const handleQueixa = (event) => {
    setSelectedQueixa(event.target.value);
  };

  const handleDoenca = (event) => {
    setSelectedDoenca(event.target.value);
  };

  return [
    selectedQueixa,
    selectedDoenca,
    handleQueixa,
    handleDoenca,
  ];
};

export default useSelectedName;
