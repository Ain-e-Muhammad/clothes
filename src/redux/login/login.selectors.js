import  {createSelector} from 'reselect'

const selectLogin = (state) => {
    return(
        state.login
    )
}

export const selectLoginState = createSelector(
    [selectLogin],
    (login) => {
        return(
            login.login
        )
    }
)