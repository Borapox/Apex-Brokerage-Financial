import { Outlet } from 'react-router-dom'
import NavBar from './components/Index-Page/NavBar'
import NavBarMenu from './components/Index-Page/NavBarMenu'

const App = () => {
  return (
    <div>
      <NavBar />
      <NavBarMenu />

      <Outlet>

      </Outlet>  
    </div>
  )
}

export default App