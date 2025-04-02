import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import SkillsContainer from '../Skills/SkillsContainer'
import ProjectsContainer from '../Projects/ProjectsContainer'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Profile/>
            <SkillsContainer/>
            <ProjectsContainer/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;