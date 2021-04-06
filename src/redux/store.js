import { applyMiddleware, createStore, combineReducers} from 'redux';
import { productUploadReducer } from './reducers/productUploadReducer';
import {drawingReducer} from './reducers/drawingReducer'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
let RootReducer = combineReducers({
    productUploadReducer: productUploadReducer,
    drawingReducer:drawingReducer
})

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))


export default store;