import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SkillsContainer from './components/Skills/SkillsContainer'
import ProjectsContainer from './components/Projects/ProjectsContainer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './resetStyle.css'
import './App.css'

function App() {
  

  return (
    <div className="App" id="home">
      <Header/>
      <Profile/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
