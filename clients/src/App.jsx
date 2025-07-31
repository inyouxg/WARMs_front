import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Title from './pages/Title'
import Home from './pages/Home'
import DiaryWriting from './pages/DiaryWriting'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/home" element={<Home />}/>
        <Route path='/home/writing' element={<DiaryWriting/>} />
      </Routes>
    </>

  )
}

export default App
