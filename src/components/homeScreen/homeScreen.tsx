import { Header } from '../header/header'
import './homeScreen.scss'

const HomeScreen = () => {
    return (
        <section className='home-screen'>
            <Header />
            <main>
                <div className='home-screen-presentation'>
                    <h2>Welcome, <span>I am</span></h2>
                    <h1 className='name'>José Eduardo</h1>
                    <h2 className='profession'>Front-End Developer</h2>
                </div>
            </main>
        </section>
    )
}

export { HomeScreen }