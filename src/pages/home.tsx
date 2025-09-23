import { HomeScreen } from "../components/homeScreen/homeScreen";
import { About } from "../components/about/about";
import { Works } from "../components/works/works";
import { Skills } from "../components/skills/skills";
import { Contacts } from "../components/contacts/contacts";

const Home = () => {
  return (
    <>
      <HomeScreen />
      <About />
      <Works />
      <Skills />
      <Contacts />
    </>
  );
};

export { Home };
