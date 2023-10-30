import { redes } from '../portfolioInfos/portfolioInfos'
import './contact.scss'

interface IContact {
    name: string
}

const Contact = ({ name }: IContact) => {
    return (
        redes.map((e, index) => {
            if (e.name === name) {
                return (
                    <div className="contact" key={index}>
                        <a href={e.link} target='_blank'>{e.icon}</a>
                        <h1 className='contact-title'>{e.name}</h1>
                    </div>
                )
            }
        })
    )
}

export { Contact }
