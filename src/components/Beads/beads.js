/* eslint-disable react/prop-types */
import React from "react"
import blue from "./mavi.png"
import kehr from "./kehribar.png"
import seaStar from './sea_star.png'
import { useDrag, DragPreviewImage } from "react-dnd"
import { ItemTypes } from "../../constants/ItemType"
import styled from "styled-components"
import { beadH, beadW} from '../../constants/necklaceCoor'
export default function Beads(props) {
	const [, drag, preview] = useDrag({
		type:"Bead",
		item: {
			type: ItemTypes.BEAD,
			id: props.id,
			stone_type: props.stone_type
		},
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	})
    
	const whichImage = (stone_type) => {
		if(stone_type == "kehribar")
			return <IMG_BEAD src={kehr}/>
		else
			return <IMG_BEAD src={seaStar}/>
	}
	console.log("Geldi",props.id)
	return (
		<>	
			<DragPreviewImage connect={preview} src={props.type} />
			<div ref={drag} style={{zIndex: 12}}>
				{whichImage(props.stone_type)}
				{/* <IMG_BEAD src={kehr} alt={props.alt} stone_type="kehribar" /> */}
			</div>
		</>

	)
}

const IMG_BEAD = styled.img`
height:70px;
width: 70px;
/* &:hover {
	transform: scale(2)
} */
`