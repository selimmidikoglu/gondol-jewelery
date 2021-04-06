
import { ADD_BEAD,SET_ID_OF_BEAD } from '../actionTypes/drawingActions'
import {Dispatch} from 'react-redux'
export const addBead = (item,index) => (dispatch) => {
    console.log(item,index)
    dispatch({
        type:ADD_BEAD,
        payload: {
            item:item,
            index:index
        }
    })
}
export const setCurrentBeadId = (index) => (dispatch) => {
    dispatch({
        type:SET_ID_OF_BEAD,
        payload: index
    })
}