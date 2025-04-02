import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Page/Home';
import BlogPost from './components/Page/BlogPost';
import './resetStyle.css'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogpost" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
