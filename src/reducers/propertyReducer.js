import * as types from '../constants/types'

const INITIAL_STATE = {
  properties: []
};

export default function (state = INITIAL_STATE, action) {
  //console.log(state, action);
  switch (action.type) {
    case types.FETCH_PROPERTIES:
      console.log(state, action.payload);
      return {
        ...state, properties: action.payload
      };
    // case types.COMPARE_PRODUCT:
    //   return {
    //     ...state, properties: state.properties.map(product =>
    //       property.id === action.property.id ?
    //         ({...property}) :
    //         property
    //     )
    //   };
    default:
      return state
  }
}
