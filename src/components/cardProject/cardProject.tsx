import { projects } from '../portfolioInfos/portfolioInfos'
import './cardProject.scss'

interface ICardProject {
    name: string
}

const CardProject = ({ name }: ICardProject) => {
    return (
        projects.map((e, index) => {
            if (e.name === name) {
                return (
                    <section className="project-card" key={index}>
                        <h1 className='project-title'>{e.name}</h1>
                        <div className='div-anchor'>
                            <a href={e.linkGHPages} target='_blank' className='pages-anchor'>Link do GitHub Pages</a>
                            <a href={e.linhkRepositorio} target='_blank' className='repository-anchor'>Link do Repositório</a>
                        </div>
                        {e.img}
                        <p className='text-about-project'>{e.text}</p>
                        <div className='project-languages'>
                            {e.skillsUtilizadas.map((a, index) => {
                                return <div key={index}>{a}</div>
                            })}
                        </div>
                    </section>
                )
            }
        })
    )
}

export { CardProject }
