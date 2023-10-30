import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCss3Alt, faGitAlt, faHtml5, faInstagram, faJs, faReact, faSass, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'


const skills = [
    {
        name: 'HTML',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faHtml5} className='icon html'/>
    },
    {
        name: 'CSS',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faCss3Alt} className='icon css' />
    },
    {
        name: 'JavaScript',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faJs} className='icon js' />
    },
    {
        name: 'React Js',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faReact} className='icon react' />
    },
    {
        name: 'TypeScript',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <img src='./src/assets/typescript.png' alt='icone do ts' className='icon ts' />
    },
    {
        name: 'Sass',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faSass} className='icon sass' />
    },
    {
        name: 'Styled Components',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <div className='icon styled'>💅</div>
    },
    {
        name: 'Jest',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <img src='./src/assets/jest.png' alt='icone do jest' className='icon jest' />
    },
    {
        name: 'Git',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faGitAlt} className='icon git' />
    },
    {
        name: 'GitHub',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates quas consequatur repellat, quibusdam ratione incidunt placeat corrupti veniam. Magni consectetur voluptatibus quis facilis impedit aperiam deserunt saepe tempore velit?',
        icon: <FontAwesomeIcon icon={faGithub} className='icon github' />
    }
]

const redes = [
    {
        name: 'Email',
        link: 'mailto:dudu.gois.123@gmail.com',
        icon: <FontAwesomeIcon icon={faEnvelope} className='icon email' />
    },
    {
        name: 'Whatsapp',
        link: 'http://wa.me/5561992516899?',
        icon: <FontAwesomeIcon icon={faWhatsapp} className='icon whatsapp' />
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/jose-eduardo-13799623b/',
        icon: <FontAwesomeIcon icon={faLinkedinIn} className='icon linkedin' />
    },
    {
        name: 'GitHub',
        link: 'https://github.com/jose-eduardo-00',
        icon: <FontAwesomeIcon icon={faGithub} className='icon github' />
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/dudsedus/',
        icon: <FontAwesomeIcon icon={faInstagram} className='icon instagram' />
    }
]

const projects = [
    {
        name: 'Pokedex',
        linkGHPages: 'https://jose-eduardo-00.github.io/quest-react-avancado-pokemon/',
        linhkRepositorio: 'https://github.com/jose-eduardo-00/quest-react-avancado-pokemon.git',
        img: <img src="./src/assets/pokedex-desktop-img.png" alt="Foto do autor do site" className='project-img'></img>,
        text: 'Está aplicação mostra uma lista que inicialmente tem 10 cards de pokemons clicáveis mas que pode aumentar caso o usuário solicite, e ao clicar em um card o usuário é direcionado para uma seção para obter mais informações do pokemon do card clicado',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <FontAwesomeIcon icon={faReact} className='icon react' />,
                            <div className='icon styled'>💅</div>,
                            <img src="./src/assets/pokeapi-icon.png" alt="Linguagens usadas no projeto PokeAPI" className='icon poke-api'></img>
                          ]
    },
    {
        name: 'Portfolio',
        linkGHPages: '#',
        linhkRepositorio: 'https://github.com/jose-eduardo-00/Portfolio.git',
        img: <img src="./src/assets/img-test.png" alt="Foto do autor do site" className='project-img'></img>,
        text: 'Este é um portfólio web que visa apresentar e mostrar algumas informações sobre o seus autor José Eduardo na seção about, mostrar os seus principais projetos e suas informações na seção works e as linguagens, mostrar as habilidades na seção skills e as formas de contato na seção contacts',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <FontAwesomeIcon icon={faReact} className='icon react' />,
                            <img src='./src/assets/typescript.png' alt='icone do ts' className='icon ts' />,
                            <FontAwesomeIcon icon={faSass} className='icon sass' />
                          ]
    },
    {
        name: 'API GitHub',
        linkGHPages: 'https://jose-eduardo-00.github.io/Quest-API-GitHub/',
        linhkRepositorio: 'https://github.com/jose-eduardo-00/Quest-API-GitHub.git',
        img: <img src="./src/assets/api-github-desktop-img.png" alt="Foto do autor do site" className='project-img'></img>,
        text: 'Está é uma aplicação que mostrar um input e botão buscar para procurar um usuário do GitHub através do seu nome de usuário, e apresenta na tela as informações do usuário buscado, os 10 primeiros repositórios e os seus 10 últimos eventos',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <img src="./src/assets/githubapi-icon.png" alt="Linguagens usadas no projeto API-GitHub" className='icon github-api'></img>
                          ]
    },
    {
        name: 'Pizzaria',
        linkGHPages: '#',
        linhkRepositorio: '#',
        img: <img src="./src/assets/img-test.png" alt="Foto do autor do site" className='project-img'></img>,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur temporibus recusandae debitis corporis ut, natus neque deserunt maiores adipisci tenetur magnam ipsam magni a inventore assumenda beatae eos accusantium quidem!',
        skillsUtilizadas: [
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>, 
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>,
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>
                          ]
    }
]

export { skills, redes, projects }