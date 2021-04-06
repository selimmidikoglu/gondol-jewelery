import React from 'react'
import './necklaceTemp.css'
import styled from 'styled-components'
import blackNecklaceNormal from './black_normal_necklace@3x.png'
import whiteNecklaceNormal from './white_normal_necklace@3x.png'
export default function NecklaceTemp() {
    return (
        <NecklaceTempContainer>
            <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
            <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
            <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
            <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
            
            <SingleTemp src={blackNecklaceNormal}></SingleTemp>
        </NecklaceTempContainer>
    )
}

const NecklaceTempContainer = styled.div `
    height: 200px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
`
const SingleTemp = styled.img `
    height: 200px;
    width: 200px;
    border-radius:10px;
    border: 4px white solid;
    padding: 20px;
`
