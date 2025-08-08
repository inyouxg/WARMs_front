import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from '../components/MyCalendar'
import EmotionModal from "../modal/EmotionModal"
import StoryModal from "../modal/StoryModal"
import emotion from '../assets/emotion.svg'
import bookmark from '../assets/bookmark.svg'
import today from '../assets/today.svg'
import axiosInstance from '../api/axiosInstance'
import './Home.css'

function Home(){
  const [emotionModal,setEmotionModal] = useState(false);
  const [storyModal,setStoryModal] = useState(false);
  const [data,setData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get("/")
    .then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.error("메인 페이지 API 호출 실패", err);
    })
  }, []);

  const onClose = () => {
    setEmotionModal(false);
    setStoryModal(false);
  }
  return(
    <div className='home-container'>
      <div className='button-wrapper'>
        <div className='left-button'>
          <span>나의 감정 차트</span>
          <button onClick={() => setEmotionModal(true)}><img src={emotion}/></button>
          {emotionModal &&
            <EmotionModal onClose={onClose}/>}
        </div>
        <div className='right-button'>
          <span>동화 모아보기!</span>
          <button onClick={() => setStoryModal(true)}><img src={bookmark}/></button>
          {storyModal &&
            <StoryModal onClose={onClose}/>}
          <span>일기 쓰러 가기!</span>
          <button onClick={() => navigate("/home/writing")}><img src={today} /></button>
        </div>
      </div>
      <Calendar data={data}/>
    </div>
  )
}
export default Home;