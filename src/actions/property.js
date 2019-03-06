import * as types from '../constants/types'

export const getProperties = () =>
  dispatch =>
    fetch('http://dev1-sample.azurewebsites.net/properties.json')
      .then(response => response.json())
      .then(response => {
        console.log(response.properties);
        dispatch({
          type: types.FETCH_PROPERTIES,
          payload: response.properties
        })
      })

export const displaySingle = property => ({
    type: types.DISPLAY_SINGLE,
    property
  })
