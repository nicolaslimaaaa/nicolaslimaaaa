import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
  return (
    <section className='flex justify-center items-center text-xl text-text-color gap-x-8 md:gap-x-16 mt-20 h-32 lg:mt-56 bg-mono-color'>
       <span className="text- font-extrabold">Contate-me:</span>
       <a href="https://www.linkedin.com/in/nlimaaaa/" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer"><AiFillGithub /></a>
       <a href="mailto:nicolaslima1500@gmail.com" target='_blank' rel="noreferrer"><AiOutlineMail /></a>
    </section>
  )
}

export default Footer