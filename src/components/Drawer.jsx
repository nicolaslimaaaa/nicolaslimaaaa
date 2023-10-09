import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineAppstore, AiOutlineProfile, AiOutlineThunderbolt } from 'react-icons/ai';
import { useState } from 'react';

const Drawer = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChangeDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
  <div className="drawer">
    <input id="my-drawer" type="checkbox" checked={ drawerOpen } onChange={ handleChangeDrawer } className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor="my-drawer" className="btn bg-main-color border-none drawer-button md:hidden mt-4 ml-4 text-text-color"><AiOutlineMenu /></label>
    {children}
    </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-dark-color text-text-color text-2xl gap-y-6">
      <label htmlFor="my-drawer" className="btn bg-main-color border-none drawer-button md:hidden text-text-color"><AiOutlineClose /></label>
      <li><Link to="/" onClick={ closeDrawer } className='mt-10'><AiOutlineHome /> Início</Link></li>
      <li><Link to="/about" onClick={ closeDrawer }><AiOutlineProfile /> Sobre</Link></li>
      <li><Link to="/projects" onClick={ closeDrawer }><AiOutlineAppstore /> Projetos</Link></li>
      <li><Link to="/skills" onClick={ closeDrawer }><AiOutlineThunderbolt /> Habilidades</Link></li>
    </ul>
  </div>
</div>
  )
}

Drawer.propTypes = {
  children: PropTypes.any
}

export default Drawer