import Uca from '../assets/projects/UCA.jpeg'
import Portfolio from '../assets/projects/portfolio.jpeg'
import Carrinho from '../assets/projects/carrinho-de-compras.jpeg'
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: 'Portfólio',
      deploy: 'https://nicolaslimaaaa.vercel.app/',
      repository:'https://github.com/nicolaslimaaaa/nicolaslimaaaa',
      img: Portfolio,
    },
    {
      title: 'UCA!',
      deploy: 'https://trybewallet-vert-sigma.vercel.app/',
      repository:'https://github.com/nicolaslimaaaa/Trybewallet',
      img: Uca,
    },
    {
      title: 'Carrinho de compras',
      deploy: 'https://shopping-cart-seven-jade.vercel.app/',
      repository:'https://github.com/nicolaslimaaaa/shopping-cart',
      img: Carrinho,
    },
  ];

  return (
    <section className='flex justify-center items-center gap-x-5 flex-wrap md:mt-28 lg:mt-0 mx-16 min-h-screen'>
      {
        projects.map(({ title, deploy, repository, img }, index) => (
          <div key={index} className='flex flex-col w-4/5 md:w-1/2 lg:w-1/3 gap-y-6 text-xl'>
            <h4 className='text-main-color text-center'>{title}</h4>
            <img src={img} alt="Imagem do projeto" className='rounded-2xl border border-mono-color'/>
            <div className='flex items-center justify-evenly text-text-color'>
              <a href={deploy} target='_blank' rel="noreferrer"><AiOutlineLink /></a>
              <a href={repository} target='_blank' rel="noreferrer"><AiOutlineGithub /></a>
            </div>
          </div>
        ))
      }
    </section>
  )
}

export default Projects