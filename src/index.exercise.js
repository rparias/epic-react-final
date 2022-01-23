// 🐨 you'll need to import React and ReactDOM up here
import React from 'react'
import ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'
import { Logo } from './components/logo'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
const App = () => {
  const handleOnClick = () => {
    console.log('button clicked')
  }
  return (
    <>
      <Logo width='80' height='80'/>
      <h1>Bookshelf</h1>
      <div>
        <button onClick={handleOnClick}>Login</button>
      </div>
      <div>
        <button onClick={handleOnClick}>Register</button>
      </div>
    </>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App/>, document.getElementById('root'))