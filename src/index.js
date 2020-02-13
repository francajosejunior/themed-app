import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import ErrorHandler from './features/errorHandler'
import store, { persistor } from './store'
import './styles/index.scss'

ReactDOM.render(
  <ErrorHandler>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ErrorHandler>,
  document.getElementById('root')
)
