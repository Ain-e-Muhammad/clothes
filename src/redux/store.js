import {createStore /*, applyMiddleware*/} from 'redux'
// import logger from 'redux-logger'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'


// const middlewares = [logger]
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor= persistStore(store)

// export default store