import eu from '../assets/minha-foto.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Home = () => {
  return (
    <section className='text-menu-color flex flex-col items-center justify-center w-full min-h-screen'>
      <div className='flex flex-col justify-center items-center text-7xl'>
        <h1 className='pb-4 text-center pt-8 text-main-color'>Nicolas Lima</h1>
        <h4 className='text-2xl pt-4 text-center'>Desenvolvedor Full Stack</h4>
      </div>
      <div className='flex justify-center items-center my-8'>
        <img
          src={eu}
          alt="Minha foto"
          className='w-80 rounded-xl'
        />
      </div>
      <section className='flex items-center text-6xl text-menu-color'>
       <a href="https://www.linkedin.com/in/nicolaslimaaaa/" target='_blank' rel="noreferrer" className='pr-12 text-text-color'><AiFillLinkedin/></a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer" className='pl-12 text-text-color'><AiFillGithub /></a>
      </section>
    </section>
  )
}

export default Home