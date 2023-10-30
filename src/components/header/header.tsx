import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <nav className='navigation'>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#works'>Works</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contacts'>Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }