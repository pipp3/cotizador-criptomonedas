import styled from "@emotion/styled";
import cripto from "./img/cripto.webp"
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 900px;
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
  margin-bottom: 50px;
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
const Subheading = styled.h2`
  font-family: "Lato", sans-serif;
  color: #7E30E1;
  text-align: center;
  font-weight: 700px;

  &::after{
    content: '';
    width: 200px;
    height: 6px;
    background-color:#E26EE5;
    display: block;
    margin: 10px auto 0 auto;
  }
`;


const Imagen = styled.img`
  max-width:700px;
  width:90%;
  margin:100px auto 0 auto;
  display:block;
`;

function App() {

  return(
    <Contenedor>
      <Imagen src={cripto}/>
      <div>
      <Heading>Cripto Line <br />
        Tu Pagina de Confianza
      </Heading>
      
      </div>
      <Subheading>Cotiza Criptomonedas al Instante</Subheading>
      <Formulario/>
      

    </Contenedor>
  )
   
}

export default App;
