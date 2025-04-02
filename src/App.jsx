import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Page/Home';
import BlogPost from './components/Page/BlogPost';
import AdminBlog from './components/Page/AdminBlog';
import './resetStyle.css'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogpost" element={<BlogPost />} />
        <Route path="/adminblogpost" element={<AdminBlog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
