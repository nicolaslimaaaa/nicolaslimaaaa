import template from '../assets/template-capa-de-projeto.jpg'
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  return (
    <section className='flex justify-center items-center gap-y-10 gap-x-5 flex-wrap md:mt-28 2xl:mt-0 mx-16 min-h-screen'>
      <div className='flex flex-col w-60 gap-y-4 text-xl'>
        <h4 className='text-text-color text-center'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-text-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-xl'>
        <h4 className='text-text-color text-center'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-text-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-xl'>
        <h4 className='text-text-color text-center'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-text-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-xl'>
        <h4 className='text-text-color text-center'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-text-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
      <div className='flex flex-col w-60 gap-y-4 text-xl'>
        <h4 className='text-text-color text-center'>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" className='rounded-2xl border border-main-color'/>
        <div className='flex items-center justify-evenly text-text-color'>
        <a href="" target='_blank'><AiOutlineLink /></a>
        <a href="" target='_blank'><AiOutlineGithub /></a>
        </div>
      </div>
    
    </section>
  )
}

export default Projects