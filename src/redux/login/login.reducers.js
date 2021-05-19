const INITIAL_STATE= {
    login: false
}
const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_SIGNIN':
            return{
                ...state,
                login: !state.login
            }
        default:
            return state
    }
}
export default loginReducer