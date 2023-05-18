import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/footer/Footer'

function App() {

  return (
    <div>
      <div className='p-0'>
      <Navbar> </Navbar>
      </div>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </div>
  )
}

export default App
