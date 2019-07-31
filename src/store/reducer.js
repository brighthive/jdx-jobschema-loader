const initialState = {
    jobData: null
 }

 const reducer = (state=initialState, action) => { 
     if (action.type === 'CONVERT') {
        return {
            ...state,
            jobData: action.jobData
        }
     }

     return state;
 }

 export default reducer;