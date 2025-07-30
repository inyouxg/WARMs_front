import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Title from './pages/Title'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="" />
      </Routes>
    </>

  )
}

export default App
