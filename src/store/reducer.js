const initialState = {
    jobData: null
 }

 const reducer = (state=initialState, action) => { 
     if (action.type === 'CONVERT') {
        // How to handle this redirect?
        // this.props.history.push({
        //     pathname: '/readable'
        // });
        return {
            ...state,
            jobData: action.uploadedFileData['@graph']
        }
     }

     return state;
 }

 export default reducer;