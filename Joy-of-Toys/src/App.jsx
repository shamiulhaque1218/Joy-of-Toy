import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'

function App() {

  return (
    <div>
      <div className='p-0'>
      <Navbar> </Navbar>
      </div>
      <Outlet> </Outlet>
    </div>
  )
}

export default App
