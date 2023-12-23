import React from "react";
import styled from "@emotion/styled";
const Div = styled.div`
  margin-left: 50px;
  background-color: #7e30e1;
  display: block;
  border-radius: 5px;
  align-items: center;
  gap: 3rem;
  padding-top: 20px;
`;
const P = styled.p`
  margin-left: 20px;
  color: #f3f8ff;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;
const Imagen = styled.img`
  display: block;
  width: 120px;
`;
const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <div>
        
      <Div>
      
        <P>
          El precio es de: <span>{PRICE}</span>
        </P>
        <P>
          El precio mas ALTO del dia es: <span>{HIGHDAY}</span>
        </P>
        <P>
          El precio mas BAJO del dia es: <span>{LOWDAY}</span>
        </P>
        <P>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </P>
        <P>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </P>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen CRIPTO"/>
      </Div>
    </div>
  );
};

export default Resultado;
