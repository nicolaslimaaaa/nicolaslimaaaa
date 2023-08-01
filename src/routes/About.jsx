const About = () => {
  return (
    <section className="flex flex-col font-bold gap-y-5 mt-8 text-menu-color">
      <p>Nome: <span className="text-text-color">Nicolas Lima</span></p>
      <p>Idade: <span className="text-text-color">23</span></p>
      <p>Profissão: <span className="text-text-color">Desenvolvedor Full Stack</span></p>
      <p>Formação: <span className="text-text-color">Matemática - Licenciatura</span></p>
      <div>
        <p>Curiosidades: </p>
        <ul className="text-text-color">
        <li> Apaixonado pela arte de resolver problemas</li>
        <li> Apreciador das realizações matemáticas</li>
        <li> Entusiasta por cubos mágicos</li>
        </ul>
      </div>
      <div>
        <p>Motores dos meus aprendizados: </p>
        <ul className="text-text-color">
          <li> A curiosidade inquieta</li>
          <li> A prática</li>
        </ul>
      </div>
      <div>
        <p>Hobbies:</p>
        <ul className="text-text-color">
          <li> Jogos</li>
          <li> Vídeos sobre curiosidades</li>
          <li> Resolução de questões matemáticas</li>
        </ul>
      </div>
    </section>
  )
}

export default About