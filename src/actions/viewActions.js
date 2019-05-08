import * as types from '../constants/types'

export const viewActions = (cardView) => ({
    type: types.SWITCH_VIEW,
    cardView
})