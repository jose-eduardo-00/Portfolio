import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <nav className='navigation'>
                <ul>
                    <li>about</li>
                    <li>works</li>
                    <li>skills</li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }