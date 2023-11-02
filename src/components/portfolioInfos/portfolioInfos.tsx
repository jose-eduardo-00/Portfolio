import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCss3Alt, faGitAlt, faHtml5, faInstagram, faJs, faReact, faSass, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import typescriptIcon from '../../assets/typescript.png'
import jestIcon from '../../assets/jest.png'
import pokedexImg from '../../assets/pokedex-desktop-img.png'
import pokeApiIcon from '../../assets/pokeapi-icon.png'
import portfolioImg from '../../assets/portfolio-desktop-img.png'
import githubApiImg from '../../assets/api-github-desktop-img.png'
import githubApiIcon from '../../assets/githubapi-icon.png'
import imgTest from '../../assets/img-test.png'


const skills = [
    {
        name: 'HTML',
        text: 'HTML ou Linguagem de Marcação de HiperTexto é o componente base da web e compõe a maior parte das páginas da internet e dos aplicativos online. O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. Hipertexto é um texto usado para fazer referência a outros textos, seja dentro de um único site ou entre sites. ',
        icon: <FontAwesomeIcon icon={faHtml5} className='icon html'/>
    },
    {
        name: 'CSS',
        text: 'CSS é chamado de linguagem Cascading Style Sheet ou Folha de Estilo em Cascatas e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.',
        icon: <FontAwesomeIcon icon={faCss3Alt} className='icon css' />
    },
    {
        name: 'JavaScript',
        text: 'O JavaScript é uma linguagem de programação interpretada e de alto nível. É uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias e animações para deixar seu site mais interativo e interessante. Junto com HTML e CSS é uma das três principais tecnologias da web.',
        icon: <FontAwesomeIcon icon={faJs} className='icon js' />
    },
    {
        name: 'React Js',
        text: 'O ReactJS é uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis. Criado pelo Facebook, o React contém uma coleção de trechos de código de JavaScript reutilizáveis chamados componentes, usados para a construção da interface do usuário (UI).',
        icon: <FontAwesomeIcon icon={faReact} className='icon react' />
    },
    {
        name: 'TypeScript',
        text: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.',
        icon: <img src={typescriptIcon} alt='icone do ts' className='icon ts' />
    },
    {
        name: 'Sass',
        text: 'O SASS é um pré-processador CSS que adiciona recursos que não estão desponíveis no CSS como variáveis, mixins, funções e operações e outras opções. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.',
        icon: <FontAwesomeIcon icon={faSass} className='icon sass' />
    },
    {
        name: 'Styled Components',
        text: 'Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. É uma biblioteca popular do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e eficiente. Com Styled Components, os estilos são definidos diretamente no componente React, combinando o CSS e a lógica do componente em um só lugar.',
        icon: <div className='icon styled'>💅</div>
    },
    {
        name: 'Jest',
        text: 'É um poderoso framework de testes em JavaScript com foco na simplicidade. Criado pelo Facebook, ele tem uma ótima interação com React, Vue.js, Angular e o próprio JavaScript.',
        icon: <img src={jestIcon} alt='icone do jest' className='icon jest' />
    },
    {
        name: 'Git',
        text: 'O Git é um sistema de controle de versão distribuído, serve para guardar as versões dos códigos feitos pelos programadores salvando qualquer modificação feita no código, para que possam baixar tanto a versão mais nova quanto uma versão anterior do código, assim facilitando o processo de compartilhamento de um projeto com outros programadores.',
        icon: <FontAwesomeIcon icon={faGitAlt} className='icon git' />
    },
    {
        name: 'GitHub',
        text: 'GitHub é uma plataforma de hospedagem de códigos de projetos usando o sistema de controle de versão chamado Git. Ele permite que desenvolvedores colaborem e façam mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.',
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
        img: <img src={pokedexImg} alt="Foto do projeto Pokedex" className='project-img'></img>,
        text: 'Está aplicação mostra uma lista que inicialmente tem 10 cards de pokemons clicáveis mas que pode aumentar caso o usuário solicite, e ao clicar em um card o usuário é direcionado para uma seção para obter mais informações do pokemon do card clicado',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <FontAwesomeIcon icon={faReact} className='icon react' />,
                            <div className='icon styled'>💅</div>,
                            <img src={pokeApiIcon} alt="Linguagens usadas no projeto PokeAPI" className='icon poke-api'></img>
                          ]
    },
    {
        name: 'Portfolio',
        linkGHPages: 'https://jose-eduardo-00.github.io/Portfolio/',
        linhkRepositorio: 'https://github.com/jose-eduardo-00/Portfolio.git',
        img: <img src={portfolioImg} alt="Foto do projeto Portfolio" className='project-img'></img>,
        text: 'Este é um portfólio web que visa apresentar e mostrar algumas informações sobre o seus autor José Eduardo na seção about, mostrar os seus principais projetos e suas informações na seção works e as linguagens, mostrar as habilidades na seção skills e as formas de contato na seção contacts',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <FontAwesomeIcon icon={faReact} className='icon react' />,
                            <img src={typescriptIcon} alt='icone do ts' className='icon ts' />,
                            <FontAwesomeIcon icon={faSass} className='icon sass' />
                          ]
    },
    {
        name: 'API GitHub',
        linkGHPages: 'https://jose-eduardo-00.github.io/Quest-API-GitHub/',
        linhkRepositorio: 'https://github.com/jose-eduardo-00/Quest-API-GitHub.git',
        img: <img src={githubApiImg} alt="Foto do projeto API do GitHub" className='project-img'></img>,
        text: 'Está é uma aplicação que mostrar um input e botão buscar para procurar um usuário do GitHub através do seu nome de usuário, e apresenta na tela as informações do usuário buscado, os 10 primeiros repositórios e os seus 10 últimos eventos',
        skillsUtilizadas: [
                            <FontAwesomeIcon icon={faHtml5} className='icon html'/>, 
                            <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
                            <FontAwesomeIcon icon={faJs} className='icon js' />,
                            <img src={githubApiIcon} alt="Linguagens usadas no projeto API-GitHub" className='icon github-api'></img>
                          ]
    },
    {
        name: 'Pizzaria',
        linkGHPages: '#',
        linhkRepositorio: '#',
        img: <img src={imgTest} alt="Foto do projeto Pizzaria" className='project-img'></img>,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur temporibus recusandae debitis corporis ut, natus neque deserunt maiores adipisci tenetur magnam ipsam magni a inventore assumenda beatae eos accusantium quidem!',
        skillsUtilizadas: [
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>, 
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>,
                            <img src="https://placehold.co/80x80" alt="Linguagens usadas no projeto"></img>
                          ]
    }
]

export { skills, redes, projects }