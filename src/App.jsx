import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projects/Projects'

function App() {
  // {availableRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element}></Route>)}
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/projects" element={<Projects />}> </Route>
      </Routes >
      <Footer />
    </>
  )
}

export default App
