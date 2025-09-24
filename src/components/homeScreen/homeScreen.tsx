import { Header } from "../header/header";
import fotoDoDonoDoSite from "../../assets/foto_jose.jpg";
import "./homeScreen.scss";

const HomeScreen = () => {
  return (
    <section className="home-screen">
      <Header />
      <main>
        <div className="home-screen-presentation">
          <div className="text-area">
            <h2>
              Welcome, <span>I am</span>
            </h2>
            <h1 className="name">José Eduardo</h1>
            <h3>Full-Stack Developer</h3>
            <p>
              Desenvolvedor Full Stack com 1 ano de experiência na criação de
              soluções web completas e robustas. Como estudante de Ciência da
              Computação, combino teoria e prática para atuar do front-end ao
              back-end, transformando desafios complexos em aplicações
              eficientes e escaláveis. Busco novas oportunidades para aplicar
              meu conhecimento no desenvolvimento de projetos inovadores.
            </p>
          </div>
          <div className="box-img">
            <img src={fotoDoDonoDoSite} alt="Foto do autor do site"></img>
          </div>
        </div>
      </main>
    </section>
  );
};

export { HomeScreen };
