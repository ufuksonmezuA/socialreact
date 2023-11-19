<<<<<<< HEAD
const initialState = {
    renew: false,
};

const contentPingReducer = (state = initialState, action) => {
    switch(action.type){
        case 'REFETCH_CONTENT':
            return {
                ...state,
                renew: action.payload
            }
        default:
            return state;
    }
}

=======
const initialState = {
    renew: false,
};

const contentPingReducer = (state = initialState, action) => {
    switch(action.type){
        case 'REFETCH_CONTENT':
            return {
                ...state,
                renew: action.payload
            }
        default:
            return state;
    }
}

>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
export default contentPingReducer;