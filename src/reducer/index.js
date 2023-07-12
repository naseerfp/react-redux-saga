const initialState = {
    fetching : false,
    user: [],
    error: null,
    test:"naseer"
}

const userRuderce = (state= initialState, action)=>{
    switch(action.type){
        case "apiCall":
            return{
                ...state,
                fetching : true,
                error:null

            }
        case "apiCallSuccess":
             return{
                    ...state,
                    fetching : false,
                    user: action.payload
    
             }   
        case "apiCallError":
                return{
                       ...state,
                       fetching : false,
                       user: null,
                       error:action.payload
       
                }  
         
       default:
        return state;

    }
}


export default userRuderce