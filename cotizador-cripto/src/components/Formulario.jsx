import { monedas } from '../data/monedas'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit=styled.input`
background-color: #49108B;
border: none;
color:#F3F8FF;
width: 100%;
padding:10px;
font-weight: 700;
text-transform: uppercase;
font-size: 15px;
border-radius: 5px;

&:hover{
background-color: #7E30E1;
cursor: pointer;
}
`
const Formulario = () => {
  
  const [moneda,SelectMonedas]=useSelectMonedas('Escoge tu Moneda: ',monedas)
  //const [SelectCriptomonedas]=useSelectMonedas('Escoge tu Criptomoneda')
  
  return (
    <form action="">
      <SelectMonedas/>

        <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario