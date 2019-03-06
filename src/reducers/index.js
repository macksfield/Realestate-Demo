import { combineReducers } from 'redux'
import property from './propertyReducer'

const realestateApp = combineReducers({
  property
});

export default realestateApp