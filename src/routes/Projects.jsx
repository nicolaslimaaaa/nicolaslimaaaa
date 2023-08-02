import template from '../assets/template-capa-de-projeto.jpg'
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section className='flex justify-center items-center gap-y-10 gap-x-5 flex-wrap mt-10'>
      <div className='flex flex-col w-60 gap-y-4 text-4xl'>
        <h4 className='text-menu-color'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-main-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-4xl'>
        <h4 className='text-menu-color'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-main-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-4xl'>
        <h4 className='text-menu-color'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-main-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-4xl'>
        <h4 className='text-menu-color'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-main-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-4xl'>
        <h4 className='text-menu-color'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-main-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
    
    </section>
  )
}

export default Projects