import imgTest from '../../assets/img-test.png'
import './about.scss'

const About = () => {
    return (
        <section className="about" id='about'>
            <p>
                Eu sou o José Eduardo desenvolvedor front-end júnior, e estou em busca da minha primeira oportunidade como
                desenvolvedor. Estou cursando Ciência da Computação e sou apaixonado por tecnologia, como desenvolvedor estou
                sempre buscando mais conhecimento com diferentes desafios, me aprimorando e sempre tentando trazer as 
                interfaces mais criativas e organizadas e as melhores soluções para impactar positivamente os usuários.
                Nas horas vagas eu gosto de jogar, ver filmes ou séries, assistir/ouvir podcast sobre tecnologia e cozinhar.  
            </p>
            <img src={imgTest} alt="Foto do autor do site"></img>
        </section>
    )
}

export { About }