import React,{useState} from "react"
import styled from "styled-components"
import { useDrop } from "react-dnd"
import {ItemTypes} from "../../constants/ItemType"
import {addBead, setCurrentBeadId} from '../../redux/actions/drawingActions'
import {useDispatch,useSelector} from 'react-redux'
const DropBead = (props) => {
	
	const drawingReducer = useSelector(state => state.drawingReducer)
    const dispatch = useDispatch()
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BEAD,
        
		drop: (item, monitor) => {
			console.log(monitor.canDrop())
			console.log(props.id,item)
			dispatch(addBead(item,props.id))
			
			console.log(monitor.getDropResult())

			//props.handleBeads(item)
		},
		// let tmp = items
		// tmp.push(item)																			
		// console.log(item,monitor)
		// setitems(tmp)
		
		collect: (monitor) => {
			return({
				isOver: monitor.isOver(),
				canDrop: monitor.canDrop(),
				id: props.id,
			  })
		}
			
			
		
	}))
	
	let border_color = "white"
	if(!isOver){
		if(drawingReducer.beads[props.id])
			border_color="transparent"
		else
			border_color="white"
	}
	else{
		if(drawingReducer.beads[props.id])
			border_color="transparent"
		else
			border_color="red"
	}
	return (
	
		<DropCircle style={{...props.style,borderColor:border_color}} ref = {drop} >
			{props.children}
		</DropCircle>
	)
}

const DropCircle = styled.div`
    
    padding:0;
    height: 50px;
    width: 50px;
    border-style: dashed;
    border-color: white;
    border-width:1px;
	border-radius:50%;
    display:flex;
	align-items:center;
	justify-content:center;
`

export default DropBead