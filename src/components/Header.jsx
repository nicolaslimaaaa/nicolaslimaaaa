import { Link } from 'react-router-dom'
import { scrollToTop } from '../utils/scrollToTop'

const Header = () => {
  return (
    <section className='hidden md:flex md:h-14 md:justify-evenly fixed z-50 w-full bg-dark-color text-menu-color pt-4 lg:text-lg xl:text-xl 2xl:text-2xl'>
      <div className='flex justify-center items-center w-1/6'>
      <Link to="/" onClick={scrollToTop}>
        <span className='text-main-color'>Nicolas</span> Lima
      </Link>  
      </div>
      <nav className='flex justify-center items-center w-full gap-x-11 xl:gap-x-20'>
      <Link to="/" onClick={scrollToTop} className='hover:text-main-color'>Início</Link>
      <Link to="/about" onClick={scrollToTop} className='hover:text-main-color'>Sobre</Link>
      <Link to="/projects" onClick={scrollToTop} className='hover:text-main-color'>Projetos</Link>
      <Link to="/skills" onClick={scrollToTop} className='hover:text-main-color'>Habilidades</Link>
      <Link to="/contact" onClick={scrollToTop} className='hover:text-main-color'> Contatos</Link>
      </nav>
    </section>
  )
}

export default Header