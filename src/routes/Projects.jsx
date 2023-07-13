import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section>
      <h1>Projetos</h1>
      <div>
        <Link to="/projects/1">Projeto 1</Link>
      </div>
      <div>
        <Link to="/projects/2">Projeto 2</Link>
      </div>
      <div>
        <Link to="/projects/3">Projeto 3</Link>
      </div>
    </section>
  )
}

export default Projects