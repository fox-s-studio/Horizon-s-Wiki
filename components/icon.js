import React from 'react'
import  Styled from 'styled-components'

const Illustration = Styled.img`
        height: ${props => props.height || 'auto'};
        width: ${props => props.width || 'auto'};
        overflow: none;
    `

const Image = ({...props}) => {
    return (
        <Illustration src={props.imgSrc || null} {...props}/>
    )
  }

export default Image;