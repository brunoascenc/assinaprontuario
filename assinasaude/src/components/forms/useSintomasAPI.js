import { useState, useEffect } from "react";
import axios from "axios";


const useSintomasAPI = () => {
   const [queixa, setQueixa] = useState([]);
   const [doenca, setDoenca] = useState([]);

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
         setQueixa(queixaNames);
         setDoenca(doencaNames);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   useEffect(() => {
     getData();
   }, []);
    
    return [queixa, doenca]
};

export default useSintomasAPI;
