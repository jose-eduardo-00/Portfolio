import "./cardProject.scss";

interface ICardProject {
  project: {
    name: string;
    linkGHPages: string;
    linhkRepositorio: string;
    img: JSX.Element;
    text: string;
    skillsUtilizadas: JSX.Element[];
  };
}

const CardProject = ({ project }: ICardProject) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <h1 className="project-title">{project.name}</h1>

        <p className="project-text-about">{project.text}</p>

        <div className="project-languages">
          {project.skillsUtilizadas.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
      </div>
      <div className="project-image">
        {project.img}

        <div className="div-anchor">
          <a
            href={project.linkGHPages}
            target="_blank"
            className="pages-anchor"
          >
            Link do Site
          </a>
          <a
            href={project.linhkRepositorio}
            target="_blank"
            className="repository-anchor"
          >
            Link do Repositório
          </a>
        </div>
      </div>
    </div>
  );
};

export { CardProject };
