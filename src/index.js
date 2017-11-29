import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducers'
import rootSaga from './Actions/sagas'
import { BrowserRouter } from 'react-router-dom'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware))
store.runSaga = sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
