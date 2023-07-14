import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
      </Routes >
      <Footer />
    </>
  )
}

export default App
