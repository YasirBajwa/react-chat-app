

const INITIAL_STATE = {
    users : [],
    current_user : {},
    firebase_users : {}
}


const reducer = (state = INITIAL_STATE,action) => {
    
     switch(action.type){
         case 'SET_USER':

             return{
                 ...state,
                 current_user : action.payload,
             }
         case 'SET_FIREBASE_USERS':
             
                return{
                    ...state,
                    users:  action.payload ,
                }
     }

    return state;
}

export default reducer;