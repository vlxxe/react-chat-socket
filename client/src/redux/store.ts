import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"

import { rootReducer } from "./rootReducer"
import { authRootSaga } from "./ducks/auth/auth-saga"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(authRootSaga)
