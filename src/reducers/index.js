import { combineReducers } from "redux";
import RegisterReducer from '../app/register/reducer'

const rootReducer = combineReducers({
    register:RegisterReducer
})

export default rootReducer;