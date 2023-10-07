import { Link } from 'react-router-dom'
import {   } from 'react-icons/ai';

const Header = () => {
  return (
    <section className='hidden md:flex md:h-14 md:justify-evenly fixed z-50 w-full bg-dark-color text-menu-color pt-4'>
      <div className='flex justify-center items-center w-1/6'>
      <Link to="/" className=''>NL</Link>  
      </div>
      <nav className='flex justify-center items-center w-full gap-x-11'>
      <Link to="/" className='hover:text-main-color'>Início</Link>
      <Link to="/about" className='hover:text-main-color'>Sobre</Link>
      <Link to="/projects" className='hover:text-main-color'>Projetos</Link>
      <Link to="/skills" className='hover:text-main-color'>Habilidades</Link>
      <Link to="/contact" className='hover:text-main-color'> Contatos</Link>
      </nav>
    </section>
  )
}

export default Header