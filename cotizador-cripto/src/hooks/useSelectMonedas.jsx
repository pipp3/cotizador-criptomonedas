import styled from "@emotion/styled";
import { useState } from "react";
const Label = styled.label`
  color: #7e30e1;
  font-size: 20px;
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin: 10px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 20px;
  color: #49108B;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  &:hover{
    cursor: pointer;
  }
`;

const useSelectMonedas = (label, opciones) => {
  const [state,setState]=useState('')
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e=>setState(e.target.value)}>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state,SelectMonedas];
};

export default useSelectMonedas;
