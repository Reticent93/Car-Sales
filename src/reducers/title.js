import {ADD_FEATURE, DELETE_FEATURE} from '../actions/title'


export const initialState = {
    title: "",
    
}

export function reducer(state= initialState, action) {
    switch(action.type) {
        case ADD_FEATURE:
        return {
            ...state, title: action.payload
        };

        case DELETE_FEATURE:
            return {
                ...state, delete: state.filter((item) => item.id !==action.payload.id) 
            }
        default:
            return state
    }
}