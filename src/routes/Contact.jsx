import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
   return (
    <section className="flex flex-col items-center min-h-screen mt-10 text-menu-color text-xl font-bold">
        <form className="flex flex-col gap-y-3">
          <label htmlFor="input-name" className='text-main-color'>Nome</label>
          <input
            type="text"
            id="input-name"
            placeholder="Ex.: Nicolas"
            className='text-center rounded-3xl border-none py-1 placeholder:text-main-color placeholder:font-normal px-4 bg-text-color focus:outline-none text-main-color'
          />

          <label htmlFor="input-last-name" className='text-main-color'>Sobrenome</label>
          <input
            type="text"
            id="input-last-name"
            placeholder="Ex.: Lima"
            className='text-center rounded-3xl border-none py-1 placeholder:text-main-color placeholder:font-normal px-4 bg-text-color focus:outline-none text-main-color'
          />

          <label htmlFor="input-customer-email" className='text-main-color'>Digite seu e-mail</label>
          <input
            type="email"
            id="input-customer-email"
            placeholder="Ex.: email@email.com"
            className='text-center rounded-3xl border-none py-1 placeholder:text-main-color placeholder:font-normal px-4 bg-text-color focus:outline-none text-main-color'
          />

          <label htmlFor="input-message" className='text-main-color'>Digite sua mensagem</label>
          <textarea
            id="input-message"
            className='text-center rounded-3xl border-none py-1 px-4 bg-text-color focus:outline-none text-main-color'
          />

          <button
            type="button"
            className='bg-main-color rounded-3xl mt-6 py-3'
          >Enviar</button>
        </form>
        <section className='flex items-center text-6xl text-text-color mt-16'>
       <a href="https://www.linkedin.com/in/nlimaaaa/" target='_blank' rel="noreferrer" className='pr-12'><AiFillLinkedin /></a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer" className='pl-12'><AiFillGithub /></a>
      </section>
    </section>
  )
}

export default Contact