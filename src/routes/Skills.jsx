import GitHub from '../assets/skills/GitHub.png'
import Git from '../assets/skills/Git.png'
import HTML from '../assets/skills/HTML.png'
import CSS from '../assets/skills/CSS.png'
import JavaScript from '../assets/skills/JavaScript.png'
import Vite from '../assets/skills/Vite.png'
import React from '../assets/skills/React.png'
import ReactRouter from '../assets/skills/ReactRouter.png'
import Redux from '../assets/skills/Redux.png'
import Jest from '../assets/skills/Jest.png'
import Tailwind from '../assets/skills/Tailwind.png'
import Daisyui from '../assets/skills/Daisyui.png'
import Node from '../assets/skills/Node.png'
import Express from '../assets/skills/Express.png'
import Mocha from '../assets/skills/Mocha.png'
import Sinon from '../assets/skills/Sinon.png'
import MySQL from '../assets/skills/MySQL.png'
import JWT from '../assets/skills/JWT.png'
import npm from '../assets/skills/npm.png'
import nodemon from '../assets/skills/nodemon.png'
import trello from '../assets/skills/trello.png'
import Notion from '../assets/skills/Notion.png'
import TypeScript from '../assets/skills/TypeScript.png'
import Sequelize from '../assets/skills/Sequelize.png'
import docker from '../assets/skills/docker.png'
import dockercompose from '../assets/skills/dockercompose.png'
import SQL from '../assets/skills/SQL.png'
import RTL from '../assets/skills/RTL.png'
import kanban from '../assets/skills/kanban.png'
import scrum from '../assets/skills/scrum.png'

const Skills = () => {
  const skills = [
    {name: 'GitHub', path: GitHub},
    {name: 'git', path: Git},
    {name: 'HTML', path: HTML},
    {name: 'CSS', path: CSS},
    {name: 'JavaScript', path: JavaScript},
    {name: 'Vite', path: Vite},
    {name: 'React', path: React},
    {name: 'React Router', path: ReactRouter},
    {name: 'Redux', path: Redux},
    {name: 'JEST', path: Jest},
    {name: 'tailwindcss', path: Tailwind},
    {name: 'daisyUI', path: Daisyui},
    {name: 'node', path: Node},
    {name: 'express', path: Express},
    {name: 'MOCHA', path: Mocha},
    {name: 'SINON.JS', path: Sinon},
    {name: 'MySQL', path: MySQL},
    {name: 'JWT', path: JWT},
    {name: 'npm', path: npm},
    {name: 'nodemon', path: nodemon},
    {name: 'Trello', path: trello},
    {name: 'Notion', path: Notion},
    {name: 'TypeScript', path: TypeScript},
    {name: 'Sequelize', path: Sequelize},
    {name: 'docker', path: docker},
    {name: 'docker Compose', path: dockercompose},
    {name: 'SQL', path: SQL},
    {name: 'Testing Library', path: RTL},
    {name: 'Kanban', path: kanban},
    {name: 'Scrum', path: scrum},
  ];

  return (
    <section className='flex justify-center flex-wrap max-w-4xl mx-16 mt-28 text-menu-color min-h-screen w-2/3 gap-5'>
      {
        skills.map(({ name, path }, index) => (
          <div className='flex flex-col text-2xl w-28 h-40 md:w-44 md:h-52 text-center items-center bg-mono-color rounded-2xl' key={`${index}.${path}`}>
            <h2 className='flex justify-center items-center h-16 w-28 text-main-color font-bold'>{name}</h2>
            <img src={path} alt="Foto da stack" className='rounded-2xl w-20 h-20 md:w-28 md:h-28 bg-text-color'/>
          </div>
        ))
      }
    </section>
  )
}

export default Skills