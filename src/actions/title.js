// we use constant variables instead of strings,
// which prevents hidden errors resulting from typos

export const ADD_FEATURE = "ADD_FEATURE"
export const DELETE_FEATURE = 'DELETE_FEATURE'

export function addFeature(title) {
    return{
    type: ADD_FEATURE,
    payload: title
    }
}

export function deleteFunction(title) {
    return {
    type: DELETE_FEATURE,
    payload: title
    }
}

