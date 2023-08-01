import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Footer from './components/Footer'

function App() {
  return (
    <section>
      <Header />
      <div>
        <Drawer>
            <div className='flex items-center justify-center w-full md:pl-80'>
            <Outlet />
            </div>
        </Drawer>
      </div>
      <Footer />
    </section>
  )
}

export default App
