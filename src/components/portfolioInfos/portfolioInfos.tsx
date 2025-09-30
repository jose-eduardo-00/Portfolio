import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faInstagram,
  faJs,
  faReact,
  faSass,
  faWhatsapp,
  faVuejs,
  faBootstrap,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import typescriptIcon from "../../assets/typescript.png";
import jestIcon from "../../assets/jest.png";
import pokedexImg from "../../assets/pokedex-desktop-img.png";
import pokeApiIcon from "../../assets/pokeapi-icon.png";
// import portfolioImg from "../../assets/portfolio-desktop-img.png";
import githubApiImg from "../../assets/api-github-desktop-img.png";
import githubApiIcon from "../../assets/githubapi-icon.png";
import adamLettering from "../../assets/adam_lettering_desktop.png";
import planilhasImg from "../../assets/planilhasImg.png";
import tailwindoIcon from "../../assets/tailwindIcon.png";
import prismaIcon from "../../assets/prismaIcon.png";
import mysqlIcon from "../../assets/mysqlIcon.png";
import postgresqlIcon from "../../assets/postgresqlIcon.png";

const skills = [
  {
    name: "HTML",
    text: 'HTML ou Linguagem de Marcação de HiperTexto é o componente base da web e compõe a maior parte das páginas da internet e dos aplicativos online. O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. Hipertexto é um texto usado para fazer referência a outros textos, seja dentro de um único site ou entre sites. ',
    icon: <FontAwesomeIcon icon={faHtml5} className="icon html" />,
  },
  {
    name: "CSS",
    text: "CSS é chamado de linguagem Cascading Style Sheet ou Folha de Estilo em Cascatas e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.",
    icon: <FontAwesomeIcon icon={faCss3Alt} className="icon css" />,
  },
  {
    name: "JavaScript",
    text: "O JavaScript é uma linguagem de programação interpretada e de alto nível. É uma linguagem de programação de comportamento que permite a criação de conteúdos dinâmicos, controle de mídias e animações para deixar seu site mais interativo e interessante. Junto com HTML e CSS é uma das três principais tecnologias da web.",
    icon: <FontAwesomeIcon icon={faJs} className="icon js" />,
  },
  {
    name: "React Js",
    text: "O ReactJS é uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis. Criado pelo Facebook, o React contém uma coleção de trechos de código de JavaScript reutilizáveis chamados componentes, usados para a construção da interface do usuário (UI).",
    icon: <FontAwesomeIcon icon={faReact} className="icon react" />,
  },
  {
    name: "Vue Js",
    text: "O Vue.js é um framework progressivo para construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, o Vue foi projetado desde o início para ser adotado de forma incremental. A biblioteca central se concentra apenas na camada de visualização, e é fácil de integrar com outras bibliotecas ou projetos existentes.",
    icon: <FontAwesomeIcon icon={faVuejs} className="icon vue" />,
  },
  {
    name: "TypeScript",
    text: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.",
    icon: <img src={typescriptIcon} alt="icone do ts" className="icon ts" />,
  },
  {
    name: "Sass",
    text: "O SASS é um pré-processador CSS que adiciona recursos que não estão desponíveis no CSS como variáveis, mixins, funções e operações e outras opções. O SASS tem como objetivo tornar o processo de desenvolvimento mais simples e eficiente.",
    icon: <FontAwesomeIcon icon={faSass} className="icon sass" />,
  },
  {
    name: "Bootstrap",
    text: "O Bootstrap é um framework front-end popular para desenvolvimento de sites responsivos e móveis. Ele fornece uma coleção de ferramentas e componentes prontos para uso, como grids, botões e formulários, que facilitam a criação de layouts modernos e atraentes.",
    icon: <FontAwesomeIcon icon={faBootstrap} className="icon bootstrap" />,
  },
  {
    name: "Tailwind",
    text: "O Tailwind CSS é um framework CSS utilitário que permite criar designs personalizados diretamente em seu HTML. Em vez de fornecer componentes prontos, o Tailwind oferece classes utilitárias que podem ser combinadas para construir qualquer design, tornando-o altamente flexível e adaptável.",
    icon: (
      <img
        src={tailwindoIcon}
        alt="icone do tailwind"
        className="icon tailwind"
      />
    ),
  },
  {
    name: "Styled Components",
    text: "Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. É uma biblioteca popular do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e eficiente. Com Styled Components, os estilos são definidos diretamente no componente React, combinando o CSS e a lógica do componente em um só lugar.",
    icon: <div className="icon styled">💅</div>,
  },
  {
    name: "Jest",
    text: "É um poderoso framework de testes em JavaScript com foco na simplicidade. Criado pelo Facebook, ele tem uma ótima interação com React, Vue.js, Angular e o próprio JavaScript.",
    icon: <img src={jestIcon} alt="icone do jest" className="icon jest" />,
  },
  {
    name: "Git",
    text: "O Git é um sistema de controle de versão distribuído, serve para guardar as versões dos códigos feitos pelos programadores salvando qualquer modificação feita no código, para que possam baixar tanto a versão mais nova quanto uma versão anterior do código, assim facilitando o processo de compartilhamento de um projeto com outros programadores.",
    icon: <FontAwesomeIcon icon={faGitAlt} className="icon git" />,
  },
  {
    name: "GitHub",
    text: "GitHub é uma plataforma de hospedagem de códigos de projetos usando o sistema de controle de versão chamado Git. Ele permite que desenvolvedores colaborem e façam mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.",
    icon: <FontAwesomeIcon icon={faGithub} className="icon github" />,
  },
  {
    name: "Prisma",
    text: "O Prisma é uma ferramenta de ORM (Object-Relational Mapping) para Node.js e TypeScript. Ele simplifica o acesso a bancos de dados, permitindo que os desenvolvedores interajam com os dados usando uma API intuitiva e tipada. O Prisma suporta vários bancos de dados, como PostgreSQL, MySQL e SQLite, e oferece recursos como migrações automáticas e geração de código.",
    icon: (
      <img src={prismaIcon} alt="icone do prisma" className="icon prisma" />
    ),
  },
  {
    name: "Node Js",
    text: "Node.js é um ambiente de execução JavaScript do lado do servidor, baseado no motor V8 do Google Chrome. Ele permite que os desenvolvedores criem aplicações web escaláveis e de alto desempenho usando JavaScript no backend. O Node.js é conhecido por sua arquitetura orientada a eventos e seu modelo de I/O não bloqueante, o que o torna ideal para aplicações em tempo real e com alta concorrência.",
    icon: <FontAwesomeIcon icon={faNode} className="icon node" />,
  },
  {
    name: "MySQL",
    text: "O MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto. Ele é amplamente utilizado para armazenar e gerenciar dados em aplicações web e é conhecido por sua robustez, escalabilidade e desempenho. O MySQL suporta a linguagem SQL (Structured Query Language) para consulta e manipulação de dados, e é uma escolha popular para aplicações que requerem um banco de dados relacional.",
    icon: <img src={mysqlIcon} alt="icone do mysql" className="icon mysql" />,
  },
  {
    name: "PostgreSQL",
    text: "O PostgreSQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto. Ele é conhecido por sua robustez, escalabilidade e conformidade com padrões. O PostgreSQL suporta uma ampla gama de tipos de dados e oferece recursos avançados como transações ACID, consultas complexas e extensibilidade. É uma escolha popular para aplicações que requerem um banco de dados relacional poderoso e flexível.",
    icon: (
      <img
        src={postgresqlIcon}
        alt="icone do postgresql"
        className="icon postgresql"
      />
    ),
  },
];

const redes = [
  {
    name: "Email",
    link: "mailto:dudu.gois.123@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="icon email" />,
  },
  {
    name: "Whatsapp",
    link: "http://wa.me/5561992516899?",
    icon: <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp" />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/jose-eduardo-13799623b/",
    icon: <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />,
  },
  {
    name: "GitHub",
    link: "https://github.com/jose-eduardo-00",
    icon: <FontAwesomeIcon icon={faGithub} className="icon github" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dudsedus/",
    icon: <FontAwesomeIcon icon={faInstagram} className="icon instagram" />,
  },
];

const projects = [
  {
    name: "Planilhas",
    linkGHPages: "https://planilha-fe-production.up.railway.app",
    linhkRepositorio: "https://github.com/jose-eduardo-00/planilha-fe",
    img: (
      <img
        src={planilhasImg}
        alt="Foto do projeto Planilhas"
        className="project-img"
      ></img>
    ),
    text: "Este é um site de planilhas web que possibilita a criação, edição, exclusão e visualização de planilhas, com funcionalidades como adicionar/remover linhas e colunas, editar células, aplicar formatação básica e salvar automaticamente as alterações. O site também oferece suporte para múltiplas planilhas e navegação fácil entre elas.",
    skillsUtilizadas: [
      <FontAwesomeIcon icon={faHtml5} className="icon html" />,
      <FontAwesomeIcon icon={faCss3Alt} className="icon css" />,
      <FontAwesomeIcon icon={faJs} className="icon js" />,
      <FontAwesomeIcon
        icon={faVuejs}
        className="icon vue"
        style={{ color: "#4FC08D" }}
      />,
      <FontAwesomeIcon
        icon={faBootstrap}
        className="icon bootstrap"
        style={{ color: "#563D7C" }}
      />,
    ],
  },
  {
    name: "Planilhas Backend",
    linkGHPages: "https://planilha-fe-production.up.railway.app",
    linhkRepositorio: "https://github.com/jose-eduardo-00/planilhas-app",
    img: (
      <img
        src={planilhasImg}
        alt="Foto do projeto Planilhas"
        className="project-img"
      ></img>
    ),
    text: "Este é um projeto backend do site das planilhas que possibilita a criação, edição, exclusão e visualização de planilhas, com funcionalidades como adicionar/remover linhas e colunas, editar células, aplicar formatação básica e salvar automaticamente as alterações.",
    skillsUtilizadas: [
      <img
        src={prismaIcon}
        alt="Linguagens usadas no projeto Prisma"
        className="icon prisma"
      ></img>,
      <FontAwesomeIcon
        icon={faNode}
        className="icon node"
        style={{ color: "#8CC84B" }}
      />,
      <FontAwesomeIcon icon={faJs} className="icon js" />,
      <img src={typescriptIcon} alt="icone do ts" className="icon ts" />,
      <img
        src={mysqlIcon}
        alt="Linguagens usadas no projeto Mysql"
        className="icon mysql"
      ></img>,
    ],
  },
  {
    name: "Pokedex",
    linkGHPages:
      "https://jose-eduardo-00.github.io/quest-react-avancado-pokemon/",
    linhkRepositorio:
      "https://github.com/jose-eduardo-00/quest-react-avancado-pokemon.git",
    img: (
      <img
        src={pokedexImg}
        alt="Foto do projeto Pokedex"
        className="project-img"
      ></img>
    ),
    text: "Está aplicação mostra uma lista que inicialmente tem 10 cards de pokemons clicáveis mas que pode aumentar caso o usuário solicite, e ao clicar em um card o usuário é direcionado para uma seção para obter mais informações do pokemon do card clicado",
    skillsUtilizadas: [
      <FontAwesomeIcon icon={faHtml5} className="icon html" />,
      <FontAwesomeIcon icon={faCss3Alt} className="icon css" />,
      <FontAwesomeIcon icon={faJs} className="icon js" />,
      <FontAwesomeIcon icon={faReact} className="icon react" />,
      <div className="icon styled">💅</div>,
      <img
        src={pokeApiIcon}
        alt="Linguagens usadas no projeto PokeAPI"
        className="icon poke-api"
      ></img>,
    ],
  },
  // {
  //     name: 'Portfolio',
  //     linkGHPages: 'https://jose-eduardo-00.github.io/Portfolio/',
  //     linhkRepositorio: 'https://github.com/jose-eduardo-00/Portfolio.git',
  //     img: <img src={portfolioImg} alt="Foto do projeto Portfolio" className='project-img'></img>,
  //     text: 'Este é um portfólio web que visa apresentar e mostrar algumas informações sobre o seu autor José Eduardo, a seção works apresenta os principais projetos com uma breve descrição em texto e as linguagens utilizadas, a seção skills apresenta as tecnologias de conhecimento do autor e na seção contacts estão as formas de contato',
  //     skillsUtilizadas: [
  //                         <FontAwesomeIcon icon={faHtml5} className='icon html'/>,
  //                         <FontAwesomeIcon icon={faCss3Alt} className='icon css' />,
  //                         <FontAwesomeIcon icon={faJs} className='icon js' />,
  //                         <FontAwesomeIcon icon={faReact} className='icon react' />,
  //                         <img src={typescriptIcon} alt='icone do ts' className='icon ts' />,
  //                         <FontAwesomeIcon icon={faSass} className='icon sass' />
  //                       ]
  // },
  {
    name: "API GitHub",
    linkGHPages: "https://jose-eduardo-00.github.io/Quest-API-GitHub/",
    linhkRepositorio: "https://github.com/jose-eduardo-00/Quest-API-GitHub.git",
    img: (
      <img
        src={githubApiImg}
        alt="Foto do projeto API do GitHub"
        className="project-img"
      ></img>
    ),
    text: "Está é uma aplicação que mostra um input e um botão buscar para procurar um usuário do GitHub através do seu nome de usuário, e apresenta na tela as informações do usuário buscado, os 10 primeiros repositórios e os seus 10 últimos eventos",
    skillsUtilizadas: [
      <FontAwesomeIcon icon={faHtml5} className="icon html" />,
      <FontAwesomeIcon icon={faCss3Alt} className="icon css" />,
      <FontAwesomeIcon icon={faJs} className="icon js" />,
      <img
        src={githubApiIcon}
        alt="Linguagens usadas no projeto API-GitHub"
        className="icon github-api"
      ></img>,
    ],
  },
  {
    name: "Adam Lettering",
    linkGHPages: "https://jose-eduardo-00.github.io/adam_lettering/",
    linhkRepositorio: "https://github.com/jose-eduardo-00/adam_lettering.git",
    img: (
      <img
        src={adamLettering}
        alt="Foto do projeto Pizzaria"
        className="project-img"
      ></img>
    ),
    text: "Está é uma aplicação feita para um ilustrador que busca mostrar e vender o seu trabalho, com uma seção home apresentando o site, uma seção portfolio com os trabalho do ilustrador, uma seção orçamento explicando como solicitar um orçamento para algum trabalho e uma seção sobre contando um pouco sobre o ilustrador.",
    skillsUtilizadas: [
      <FontAwesomeIcon icon={faHtml5} className="icon html" />,
      <FontAwesomeIcon icon={faCss3Alt} className="icon css" />,
      <FontAwesomeIcon icon={faJs} className="icon js" />,
      <FontAwesomeIcon icon={faReact} className="icon react" />,
      <img src={typescriptIcon} alt="icone do ts" className="icon ts" />,
      <FontAwesomeIcon icon={faSass} className="icon sass" />,
    ],
  },
];

export { skills, redes, projects };
