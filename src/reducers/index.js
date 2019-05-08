import { combineReducers } from 'redux'
import propertyReducer from './propertyReducer'
import viewReducer from './viewReducer'

const realestateApp = combineReducers({
  propertyReducer, viewReducer
});

export default realestateApp