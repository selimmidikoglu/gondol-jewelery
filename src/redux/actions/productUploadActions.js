import { UPLOAD_PRODUCT, PRODUCT_UPLOADED, PRODUCT_UPLOADING, PRODUCT_UPLOAD_ERROR } from '../actionTypes/productUpload'
import axios from 'axios'

import FormData from 'form-data'


export const UploadStone = (data) => async (dispatch) => {
    let form = new FormData()
    Object.keys(data.photos).map((el,i) => {
        console.log(data.photos[el],"ne oldu")
        form.append(data["stone_type"]+"_"+data["stone_color"]+"_"+data["stone_name"]+"_"+i.toString(),data.photos[el])
    })
    Object.keys(data).map(el => {
        console.log(data[el])
        if(el !== 'photos'){
            console.log(el,data[el])
            form.append(el, data[el])
        }
            
    })
    
    console.log(form)
    try {
        dispatch({
            type: PRODUCT_UPLOADING
        })
        console.log(data)
        const res = await axios.post('http://localhost:6006/auth/image',form)
        console.log("res", res.data)
        dispatch({
            type: PRODUCT_UPLOADED,
            payload: {
                success: res.data.success
            }
        })
    }
    catch (e) {
        dispatch({
            type: PRODUCT_UPLOAD_ERROR
        })
    }
}









