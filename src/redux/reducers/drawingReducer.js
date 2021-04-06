import { ADD_BEAD,SET_ID_OF_BEAD } from '../actionTypes/drawingActions'

const droppedOrNot = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
const beads = droppedOrNot.map((el)=> null)
const initialState = {
    beads :beads,
    current_bead_id : 0

}


export const drawingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BEAD:
            return {
                ...state,
                beads : [...state.beads.slice(0,action.payload.index),action.payload.item,...state.beads.slice(action.payload.index+1,state.beads.length)]
            }
        case SET_ID_OF_BEAD:
            return {
                ...state,
                current_bead_id: action.payload
            }
        default:
            return state;
    }

}


