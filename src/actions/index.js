// action creators -> function that creates actions 
// action types  -> variables that contain the action type strings to save us from spelling errors 
// actions -> objects that describe to the reducer what event has occured and how it should update the state 

// action creator
export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature= item => {
    return {type: ADD_FEATURE , payload: item}
}

// action creator 
export const DELETE_FEATURE = "DELETE_FEATURE";

export const deleteFeature = item => {
    return {type: DELETE_FEATURE, payload: item}
}