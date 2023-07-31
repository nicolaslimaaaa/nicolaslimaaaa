import templateSkills from '../assets/template-para-skills.jpg';

const Skills = () => {
  return (
    <section>
      <div className='w-60'>
        <img src={templateSkills} alt="Foto da stack" />
        <h2>Nome da Skill</h2>
      </div>
      <div className='w-60'>
        <img src={templateSkills} alt="Foto da stack" />
        <h2>Nome da Skill</h2>
      </div>
    </section>
  )
}

export default Skills