import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import "./Project.css"

const Project = ({img,name, description, tools, url, link}) => {
    return (
        <div className="project-container">
            <div className="project-top">
                <div className="project-links">
                    <a className="link" href={link} target="_blank">
                        <FaLink/>
                    </a>
                    <a className="link" href={url} target="_blank">
                        <FaGithub/>
                    </a>
                </div>
                <div className="project-img">
                    <img className="img" src={img} alt="" />
                </div>
            </div>
            <div className="project-bottom">
                <div className="project-name">{name}</div>
                <div className="project-description">{description}</div>
                <div className="project-tools">
                    {tools}
                </div>
            </div>
        </div>
    );
};

export default Project;