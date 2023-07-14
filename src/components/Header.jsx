import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
      <nav>
        <div>Nicolas Lima</div>
        
        <div>
          <Link to="/">Início</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/contact">Contatos</Link>
        </div>
      </nav>
    </section>
  )
}

export default Header