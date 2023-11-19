<<<<<<< HEAD
const initialState =  {
    user: {
        name: "",
        lastname: "",
        username: "",
        _id: "",
    },
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
         return {...state, user: action.payload}

         case 'LOGOUT':
            return {...state, user: {}}
        
        default:
            return state;
    }
}

=======
const initialState =  {
    user: {
        name: "",
        lastname: "",
        username: "",
        _id: "",
    },
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
         return {...state, user: action.payload}

         case 'LOGOUT':
            return {...state, user: {}}
        
        default:
            return state;
    }
}

>>>>>>> 4f17b334f63bbf6a2e63240889b4189164e04d8c
export default userReducer;