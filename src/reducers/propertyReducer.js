import * as types from '../constants/types'

const INITIAL_STATE = {
    properties: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.FETCH_PROPERTIES:
            return {
                ...state, properties: action.payload
            };

        default:
            return state
    }
}
