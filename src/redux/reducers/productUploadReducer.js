import { UPLOAD_PRODUCT, PRODUCT_UPLOADED, PRODUCT_UPLOADING, PRODUCT_UPLOAD_ERROR } from '../actionTypes/productUpload'
const initialState = {
    productUploading: false,
    productUploadSuccess: false,

}


export const productUploadReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_UPLOADING:
            return {
                ...state,
                productUploading: true,
            }
        case PRODUCT_UPLOADED: {
            return {
                ...state,
                productUploading: false,
                productUploadSuccess: action.payload.success
            }
        }
        case PRODUCT_UPLOAD_ERROR :{
            return {
                ...state,
                productUploading: false,
                productUploadSuccess: false,
            }
        }
        default:
            return state;
    }

}


