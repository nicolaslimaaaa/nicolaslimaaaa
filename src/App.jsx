import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Footer from './components/Footer'
import ToTop from './components/ToTop'

function App() {
  return (
    <section className='font-playfair'>
      <Header />
      <div>
        <Drawer>
            <div className='flex flex-col items-center justify-center w-full pt-14'>
            <Outlet />
            </div>
        </Drawer>
      </div>
      <ToTop />
      <Footer />
    </section>
  )
}

export default App
