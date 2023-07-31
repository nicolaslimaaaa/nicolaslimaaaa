import template from '../assets/template-capa-de-projeto.jpg'

const Projects = () => {
  return (
    <section className='flex justify-center items-center gap-10 flex-wrap '>
      <div className='w-60'>
        <h4>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
      <div className='w-60'>
        <h4>Projeto 2</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
      <div className='w-60'>
        <h4>Projeto 3</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
    
      <div className='w-60'>
        <h4>Projeto 1</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
      <div className='w-60'>
        <h4>Projeto 2</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
      <div className='w-60'>
        <h4>Projeto 3</h4>
        <img src={template} alt="Imagem do projeto" />
        <p>Stacks:</p>
        <a href="" target='_blank'>Deploy</a>
        <a href="" target='_blank'>GitHub</a>
      </div>
    </section>
  )
}

export default Projects