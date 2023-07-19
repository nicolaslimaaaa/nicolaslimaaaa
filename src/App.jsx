import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  )
}

export default App
