
const initialState = {
        results: null
}



const rootReducer = (state=initialState, action) => {
        switch(action.type){
            case 'GET_RESULTS' :
            return  {results: action.data}
            default:
                return state

        }
}

export default rootReducer

