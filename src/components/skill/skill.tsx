import { skills } from '../portfolioInfos/portfolioInfos'
import './skill.scss'

interface ISkill {
    name: string
}

const Skill = ({ name }: ISkill) => {
    return (
        skills.map((e, index) => {
            if (e.name.toLowerCase() === name.toLowerCase()) {
                return (
                    <div className='skill-div' key={index}>
                        {e.icon}
                        <h1 className='skill-title'>{e.name}</h1>
                        <p className='skill-text'>{e.text}</p>
                    </div>
                )
            }
        })
    )
}

export { Skill }