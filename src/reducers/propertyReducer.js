import * as types from '../constants/types'

const INITIAL_STATE = {
  properties: [],
  selectedProperty: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PROPERTIES:
      return {
        ...state, properties: action.payload
      };
    case types.PROPERTY_DETAILS:
      return {
        ...state, selectedProperty: action.payload
      };
    default:
      return state
  }
}
