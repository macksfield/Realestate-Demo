import * as types from '../constants/types'

const INITIAL_STATE = {
    cardView: true
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SWITCH_VIEW:
            return {
                ...state, cardView: action.cardView
            };

        default:
            return state
    }
}
