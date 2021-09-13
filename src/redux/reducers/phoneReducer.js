import *  as actionTypes from "../types/type";

const initialState = {
    numberOfPhones : 300,
}

const phoneReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SELL_PHONE:
            return {
                ...state,
                numberOfPhones: state.numberOfPhones -1,
            }
    
        default:
            return state
    }
}

export default phoneReducer;