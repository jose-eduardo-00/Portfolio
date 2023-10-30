import './header.scss'
import { hoverUnderline } from './utils'
import { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
        hoverUnderline()
    })

    return (
        <header className="header">
            <nav className='navigation'>
                <ul>
                    <li><a href='#about' className='hover-before'>About</a></li>
                    <li><a href='#works' className='hover-before'>Works</a></li>
                    <li><a href='#skills' className='hover-before'>Skills</a></li>
                    <li><a href='#contacts' className='hover-before'>Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }