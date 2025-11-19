import { RiHtml5Fill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import "./ProjectsContainer.css"
import Project from "./Project";

const ProjectsContainer = () => {
    return (
        <div className="projects-container" id="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-lists">
                <Project img={"calcuhub.png"} name={"Calcuhub"} description={"Page with a wide range of different types of calculators to facilitate calculations such as BMI and BMR, among others."} tools={[<FaReact />,<BiLogoTypescript />,<RiNextjsLine />]} url={"https://github.com/ospinajuanp/calcuhub"} link={"https://calcuhub-lovat.vercel.app/"}/>
                <Project img={"npm.png"} name={"ospinajuanp-reset-css"} description={"ospinajuanp-reset-css standardizes styles by removing browser inconsistencies."} tools={[<RiHtml5Fill/>,<FaJsSquare/>,<FaNodeJs/>]} url={"https://github.com/ospinajuanp/ospinajuanp-reset-css"} link={"https://www.npmjs.com/package/ospinajuanp-reset-css"}/>
                <Project img={"PorfolioVisualZuleta.png"} name={"PorfolioVisualZuleta"} description={"WebThemeGenerator is a tool for developers that quickly generates a color palette from a single input color."} tools={[<RiHtml5Fill/>,<FaJsSquare/>,<FaNodeJs/>,<SiVite/>,<SiGithubpages/>]} url={"https://github.com/ospinajuanp/PorfolioVisualZuleta"} link={"https://ospinajuanp.github.io/PorfolioVisualZuleta/"}/>
                <Project img={"webthemegenerator.png"} name={"webthemegenerator"} description={"WebThemeGenerator is a tool for dev that quickly generates a color palette from a single input color."} tools={[<RiHtml5Fill/>,<FaJsSquare/>,<FaNodeJs/>,<SiVite/>]} url={"https://github.com/ospinajuanp/webthemegenerator"} link={"https://webthemegenerator.vercel.app/"}/>
            </div>
        </div>
    );
};

export default ProjectsContainer;