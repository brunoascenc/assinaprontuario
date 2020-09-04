import React from 'react'


const Prontuario = ({selectedQueixa, selectedDoenca}) => {
    return (
      <div>
        <h3>Queixa</h3>
        <span>{selectedQueixa}</span>
        <h3>Doença</h3>
        <span>{selectedDoenca}</span>
        <h3>Historico</h3>
        <span></span>
      </div>
    );

}

export default Prontuario