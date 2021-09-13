import *  as actionTypes from "../types/type";

const initialState = {
    numberOfLaptops : 100,
}

const laptopReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SELL_LAPTOP:
            return {
                ...state,
                numberOfLaptops: state.numberOfLaptops -1,
            }
    
        default:
            return state
    }
}

export default laptopReducer;