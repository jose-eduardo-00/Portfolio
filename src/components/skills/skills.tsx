import { Skill } from '../skill/skill'
import './skils.scss'

const Skills = () => {
    return (
        <section className="skills" id='skills'>
            <Skill name='HTML' />
            <Skill name='CSS' />
            <Skill name='JavaScript' />
            <Skill name='React Js' />
            <Skill name='TypeScript' />
            <Skill name='Sass' />
            <Skill name='Styled Components' />
            <Skill name='Jest' />
            <Skill name='Git' />
            <Skill name='GitHub' />
        </section>
    )
}


export { Skills }