import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <Drawer>
      <section>
        <Header />
        <Outlet />
      </section>
    </Drawer>
  )
}

export default App
