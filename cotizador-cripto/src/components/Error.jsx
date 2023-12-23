import React from 'react'
import styled from '@emotion/styled'
const Texto=styled.div`
    background-color: #49108B;
    color: #F3F8FF;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
`

const Error = ({children}) => {
  return (
    <div>
        <Texto>
                {children}
        </Texto>
    </div>
  )
}

export default Error