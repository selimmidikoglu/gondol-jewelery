import React, { useState, useEffect } from "react"
import Beads from "../Beads/beads"
import "./home.css"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DropBead from "../DropBead/dropBead"
import styled from "styled-components"
import Navbar from '../NavBarMain/navbar'
import { dropBeadCoordinates } from '../../constants/necklaceCoor'
import { addBead } from '../../redux/actions/drawingActions'
import { useDispatch, useSelector } from 'react-redux'
import KırmızıIP from "../NavBarMain/kırmızıIP"

// const droppedOrNot = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
export default function Home() {
	const drawingReducer = useSelector(state => state.drawingReducer)
	const dispatch = useDispatch()
	const dropBeads = (item, index) => {
		dispatch(addBead(item, index))
	}

	return (
		<DndProvider debugMode={true} backend={HTML5Backend}>

			<div className="mainContainer">
				{/* <Navbar/> */}
				<div className="container">
					<div className="row">
						<div className="col-md-3 conL">
							<div className="drag-target">
								<Beads id={drawingReducer.current_bead_id} type="Bead" stone_type="kehribar" />
								<Beads id={drawingReducer.current_bead_id} type="Bead" stone_type="seastar" />
								{/* <NecklaceTemp/> */}
							</div>
						</div>
						<div className="col-md-9 conR">

							<div className="drop-target" >

								{/* <KırmızıIP style={{position:"absolute",zIndex:2,height:"500px"}}/> */}
								{/* <Canvas width="400" height="200" id="necklace"> </Canvas> */}
								{dropBeadCoordinates.map((el, i) => {
									return (
										<DropBead key={`drop${i}`} className="drop-bead"
											style={{
												position: "absolute",
												left: el[0], top: el[1],
												transform: `rotate(${el[2]}deg)`,

											}}
											id={i}

										>
											{drawingReducer.beads[i] && <Beads stone_type={drawingReducer.beads[i].stone_type} id={i} type={drawingReducer.beads[i].type} />}
										</DropBead>
									)
								})}
								{/* <DropBead handleBeads={(item) => dropBeads(item)}>
                    {beads.map((el,i) => {
                      return <Beads stone_type={el.stone_type} type={el.type} alt={el.alt}/>
                    })}
                  </DropBead> */}

							</div>

						</div>
					</div>
				</div>
			</div>

		</DndProvider>


	)
}


const Canvas = styled.canvas`
  /* width:600px;
  height:300px;
  border:1px dotted white; */
  display:block;

`