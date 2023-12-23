import styled from "@emotion/styled";
import cripto from "./img/cripto.webp"
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";
import { useState,useEffect } from "react";

const Contenedor = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #7E30E1;
  text-align: center;
  font-weight: 700px;
  margin-top:80px;
  margin-bottom: 10px;
  font-size: 34px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color:#E26EE5;
    display: block;
    margin: 10px auto 0 auto;
  }
 
`;
const Imagen = styled.img`
  max-width:600px;
  width:80%;
  margin:80px auto 0 auto;
  display:block;
`;

function App() {
const [monedas,setMonedas]=useState({})
const [resultado,setResultado]=useState({})
const [cargando,setCargando]=useState(false)
useEffect(()=>{
  if(Object.keys(monedas).length >0){
    const cotizarCripto=async()=>{
      setCargando(true)
      const {moneda,criptomoneda}=monedas
      const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const respuesta=await fetch(url)
      const resultado=await respuesta.json()
      setResultado(resultado.DISPLAY[criptomoneda][moneda])
      setCargando(false)
    }
    cotizarCripto()
  }
},[monedas])
  return(
    <Contenedor>
      <Imagen src={cripto}/>
      <div>
      <Heading>Cripto Line <br />
        Tu Pagina de Confianza
      </Heading>
      
      </div>
     
      <Formulario setMonedas={setMonedas}/>
      {cargando && <Spinner/> }
      {resultado.PRICE && <Resultado resultado={resultado}/> }

    </Contenedor>
  )
   
}

export default App;
