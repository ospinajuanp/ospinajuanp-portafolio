import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import SkillsContainer from './components/Skills/SkillsContainer'
import ProjectsContainer from './components/Projects/ProjectsContainer'
import Contact from './components/Contact/Contact'
import './resetStyle.css'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <Profile/>
      <SkillsContainer/>
      <ProjectsContainer/>
      <Contact/>
      
      {/* <div className="container-cards">
        <div className="card color-uno">a</div>
        <div className="card color-dos">b</div>
        <div className="card color-tres">c</div>
        <div className="card color-cuatro">d</div>
        <div className="card color-cinco">e</div>
        <div className="card color-seis">f</div>
      </div> */}
    </div>
  )
}

export default App
