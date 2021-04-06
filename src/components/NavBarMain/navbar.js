import React, { useState } from 'react'
import './navbar.css'
import styled from 'styled-components'
import { BrowserRouter as Router, Route,Link } from "react-router-dom"
import blackNecklaceNormal from './black_normal_necklace@3x.png'
import whiteNecklaceNormal from './white_normal_necklace@3x.png'
import ThreeBigDesign from './THREE_BIG_NECKLACE'
export default function Navbar() {
    const [jewTypesOpen, setJewTypesOpen] = useState(false)
    const [tempsOpened, setTempsOpen] = useState(false)
    return (
        <>
            <div className="container navbar-main-container">
                <section className="col-3 logo-container ">
                    GONDOL
                </section>
                <div className="col-9 nav-buttons-container">
                    <ul>
                        <li onClick={() => setJewTypesOpen(!jewTypesOpen)}>
                            <a href="/design">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>
                        <li>
                            <a href="#">Design</a>
                        </li>

                    </ul>
                </div>
            </div>
            {jewTypesOpen &&
                <div className="container jewellery-type-container">
                    <div className="info-type" onClick={() => setTempsOpen(!tempsOpened)}>Kolye</div>
                    <div className="info-type">Bileklik</div>
                    <div className="info-type">Halhal</div>
                    <div className="info-type">Tespih</div>
                </div>
            }
            {tempsOpened &&
                <div className="container necklace-temp-container">
                    <NecklaceTempContainer>
                        <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
                        <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
                        <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
                        <SingleTemp src={whiteNecklaceNormal}></SingleTemp>
                        {/* <ThreeBigDesign></ThreeBigDesign> */}
                        <SingleTemp src={blackNecklaceNormal}></SingleTemp>
                    </NecklaceTempContainer>
                </div>
            }
        </>
    )
}

const NecklaceTempContainer = styled.div `
    height: 80px;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
`
const SingleTemp = styled.img `
    height: 80px;
    width: 80px;
    border-radius:10px;
    border: 1px white solid;
    padding: 2px;
`