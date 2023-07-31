import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineMessage, AiOutlineAppstore, AiOutlineProfile, AiOutlineThunderbolt } from 'react-icons/ai';

const Header = () => {
  return (
    <section className='hidden md:block w-80 fixed top-0 left-0 h-screen bg-bg-header'>
      <nav className='flex flex-col gap-14 ml-6'>
      <Link to="/" className='flex items-center gap-4'><AiOutlineHome /> Início</Link>
      <Link to="/about" className='flex items-center gap-4'><AiOutlineProfile /> Sobre</Link>
      <Link to="/projects" className='flex items-center gap-4'><AiOutlineAppstore /> Projetos</Link>
      <Link to="/skills" className='flex items-center gap-4'><AiOutlineThunderbolt /> Habilidades</Link>
      <Link to="/contact" className='flex items-center gap-4'><AiOutlineMessage /> Contatos</Link>
      </nav>
    </section>
  )
}

export default Header