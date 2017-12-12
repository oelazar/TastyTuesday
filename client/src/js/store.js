/**
 * Created by shir.shaashua on 29/11/2017.
 */
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import customMiddleWare from './middlewares/middlewares'

export default(initialState) => {
    const appMiddlewares = applyMiddleware(customMiddleWare, createLogger())
    return createStore(rootReducer, appMiddlewares)
}