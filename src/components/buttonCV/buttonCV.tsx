import curriculo from '../../assets/Currículo.pdf'
import './buttonCV.scss'

const ButtonCV = () => {
    return <a href={curriculo} download='curriculo.pdf'><button className="cv">Download CV</button></a>
}

export { ButtonCV }