import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineMessage, AiOutlineAppstore, AiOutlineProfile, AiOutlineThunderbolt } from 'react-icons/ai';

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn bg-main-color border-none drawer-button md:hidden"><AiOutlineMenu /></label>
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-dark-color text-text-color">
    <label htmlFor="my-drawer" className="btn bg-main-color border-none drawer-button md:hidden"><AiOutlineClose /></label>
      <li><Link to="/"><AiOutlineHome /> Início</Link></li>
      <li><Link to="/about"><AiOutlineProfile /> Sobre</Link></li>
      <li><Link to="/projects"><AiOutlineAppstore /> Projetos</Link></li>
      <li><Link to="/skills"><AiOutlineThunderbolt /> Habilidades</Link></li>
      <li><Link to="/contact"><AiOutlineMessage /> Contatos</Link></li>
    </ul>
  </div>
</div>
  )
}

Drawer.propTypes = {
  children: PropTypes.any
}

export default Drawer