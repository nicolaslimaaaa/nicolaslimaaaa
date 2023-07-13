import { useParams } from 'react-router-dom'

const Project = () => {
  const { id } = useParams()
  return (
    <section>
      Projeto {id}
    </section>
  )
}

export default Project