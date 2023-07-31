const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-evenly h-screen">
      <section>
        <form className="flex flex-col">
          <label htmlFor="input-name">Nome</label>
          <input type="text" id="input-name" placeholder="Ex.: Nicolas"/>
          <label htmlFor="input-last-name">Sobrenome</label>
          <input type="text" id="input-last-name" placeholder="Ex.: Lima"/>
          <label htmlFor="input-customer-email">Digite seu e-mail</label>
          <input type="email" id="input-customer-email" placeholder="Ex.: email@email.com"/>
          <label htmlFor="input-message">Digite sua mensagem</label>
          <input type="text" id="input-message" placeholder="Ex.: Olá, tudo bem? ..."/>
          <button type="button">Enviar</button>
        </form>
      </section>
      <section>
      <a href="https://www.linkedin.com/in/nicolaslimaaaa/" target='_blank' rel="noreferrer">LinkedIn</a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer">GitHub</a>
      </section>
    </section>
  )
}

export default Contact