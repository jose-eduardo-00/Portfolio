import { CardProject } from '../cardProject/cardProject'
import './works.scss'

const Works = () => {
    return (
        <section className='works' id='works'>
            <CardProject name='Pokedex' />
            <CardProject name='API GitHub' />
            <CardProject name='Portfolio' />
            <CardProject name='Pizzaria'/>
        </section>
    )
}

export { Works }