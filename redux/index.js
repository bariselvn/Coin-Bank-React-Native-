import reducerMusteri from './reducerMusteri/index';
import reducerHesap from './reducerHesap/index';


import {combineReducers} from 'redux'

const reducerCombined = combineReducers({
    reducerHesap,
    reducerMusteri,
   

});
export default reducerCombined