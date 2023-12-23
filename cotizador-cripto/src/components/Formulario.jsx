import { monedas } from "../data/monedas";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { useEffect, useState } from "react";
import Error from "./Error";
const InputSubmit = styled.input`
  background-color: #49108b;
  border: none;
  color: #f3f8ff;
  width: 100%;
  padding: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 5px;

  &:hover {
    background-color: #7e30e1;
    cursor: pointer;
  }
`;
const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas(
    "Escoge tu Moneda: ",
    monedas
  );
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Escoge tu Criptomoneda: ",
    criptos
  );

  //const [SelectCriptomonedas]=useSelectMonedas('Escoge tu Criptomoneda')
  useEffect(() => {
    const consultaApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptos);
    };
    consultaApi();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes("")) {
      setError(true);
    }
    else{
      setMonedas({moneda,criptomoneda})
    }
  };
  return (
    <div>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="Cotizar" />
      </form>
    </div>
  );
};

export default Formulario;
