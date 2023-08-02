import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className="flex flex-col items-center h-screen mt-10 text-menu-color text-xl font-bold">
        <form className="flex flex-col gap-y-3">
          <label htmlFor="input-name">Nome</label>
          <input
            type="text"
            id="input-name"
            placeholder="Ex.: Nicolas"
            className='text-center rounded-3xl border-none py-1 placeholder:text-icons-color placeholder:font-normal px-4 bg-main-color focus:outline-none text-icons-color'
          />

          <label htmlFor="input-last-name">Sobrenome</label>
          <input
            type="text"
            id="input-last-name"
            placeholder="Ex.: Lima"
            className='text-center rounded-3xl border-none py-1 placeholder:text-icons-color placeholder:font-normal px-4 bg-main-color focus:outline-none text-icons-color'
          />

          <label htmlFor="input-customer-email">Digite seu e-mail</label>
          <input
            type="email"
            id="input-customer-email"
            placeholder="Ex.: email@email.com"
            className='text-center rounded-3xl border-none py-1 placeholder:text-icons-color placeholder:font-normal px-4 bg-main-color focus:outline-none text-icons-color'
          />

          <label htmlFor="input-message">Digite sua mensagem</label>
          <textarea
            id="input-message"
            className='text-center rounded-3xl border-none py-1 px-4 bg-main-color focus:outline-none text-icons-color'
          />

          <button
            type="button"
            className='bg-icons-color text-main-color rounded-3xl mt-6 py-3'
          >Enviar</button>
        </form>
        <section className='flex items-center text-6xl text-main-color mt-16'>
       <a href="https://www.linkedin.com/in/nicolaslimaaaa/" target='_blank' rel="noreferrer" className='pr-12'><AiFillLinkedin /></a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer" className='pl-12'><AiFillGithub /></a>
      </section>
    </section>
  )
}

export default Contact