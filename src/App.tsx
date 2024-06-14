
import { Outlet } from 'react-router-dom'
import './App.css'
import classes from './App.module.css'
function App() {

  return (
     <div className={classes.app}>
      <h1>Github Finder</h1>
      <Outlet/>
      </div>
  )
}

export default App
