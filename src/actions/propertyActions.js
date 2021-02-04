import * as types from '../constants/types'

export const getProperties = () =>
    dispatch =>
        //api end point no longer works, so fetch local backup
        // fetch('http://dev1-sample.azurewebsites.net/properties.json')
        fetch('/properties.json')
            .then(response => response.json())
            .then(response => {
                // console.log(response.properties);
                dispatch({
                    type: types.FETCH_PROPERTIES,
                    payload: response.properties
                })
            })

