import React from 'react'
import Routes from './Routes'

let theme = 'premium-theme'

//theme = 'retail-theme'

function App() {
  return (
    <div className={`app-container ${theme}`}>
      <Routes />
    </div>
  )
}

export default App
