import {combineReducers} from 'redux';
import productReducer from './products-reducer';
import cartReducer from './cart-reducer';
import videoReducer from './video-trade';

const allReducers = {
    products:productReducer,
    shoppingCart:cartReducer,
    videoIndex:videoReducer
}
const rootReducer = combineReducers(allReducers);
export default rootReducer;