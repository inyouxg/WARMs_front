import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Title from './pages/Title'
import Home from './pages/Home'
import DiaryWriting from './pages/DiaryWriting'
import EmotionReport from './pages/EmotionReport'
import MyStory from './pages/MyStory'
import './App.css'
import ModalTest from './pages/ModalTest'

function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<ModalTest />} />
        <Route path="/" element={<Title />} />
        <Route path="/home" element={<Home />}/>
        <Route path='/home/writing' element={<DiaryWriting/>} />
        <Route path='/home/writing/report' element={<EmotionReport/>}/>
        <Route path='/home/writing/report/story' element={<MyStory/>}/>
      </Routes>
    </>

  )
}
export default App
