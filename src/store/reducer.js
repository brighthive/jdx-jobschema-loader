const initialState = {
    jobData: null
 }

 const reducer = (state=initialState, action) => {
     switch (action.type) {
         case 'LOAD':
             return {
                 ...state,
                 jobData: action.jobData
             }
        case 'REMOVE':
             return {
                 ...state,
                 jobData: null
             }
     } 

     return state;
 }

 export default reducer;