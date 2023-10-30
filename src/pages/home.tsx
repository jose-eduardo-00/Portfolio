import { HomeScreen } from "../components/homeScreen/homeScreen"
import { About } from "../components/about/about"
import { Works } from "../components/works/works"
import { Skills } from "../components/skills/skills"
import { Contacts } from "../components/contacts/contacts"
import { ButtonCV } from "../components/buttonCV/buttonCV"

const Home = () => {
    return (
        <main className="home">
            <HomeScreen />
            <About />
            <Works />
            <Skills />
            <Contacts />
            <ButtonCV />
        </main>
    )
}

export { Home }