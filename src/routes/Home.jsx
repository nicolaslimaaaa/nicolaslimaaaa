import eu from '../assets/minha-foto.png'
const Home = () => {
  return (
    <section>
      <div>
        <h1>Nicolas Lima</h1>
        <h4>Desenvolvedor Full Stack</h4>
      </div>
      <section>
       <a href="https://www.linkedin.com/in/nicolaslimaaaa/" target='_blank' rel="noreferrer">LinkedIn</a>
       <a href="https://github.com/nicolaslimaaaa" target='_blank' rel="noreferrer">GitHub</a>
      </section>
      <div>
        <img src={eu} alt="Minha foto" />
      </div>
    </section>
  )
}

export default Home