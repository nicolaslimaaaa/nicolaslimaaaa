import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <section>
      <Header />
      <div className='ml-80'>
        <Drawer>
            <div className='flex items-center justify-center w-full'>
            <Outlet />
            </div>
        </Drawer>
      </div>
    </section>
  )
}

export default App
