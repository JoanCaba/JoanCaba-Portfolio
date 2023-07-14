import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About/About'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/about" element={<About></About>}> </Route>
      </Routes >
    </>
  )
}

export default App
