import Calendar from '../components/MyCalendar'
import './Home.css'
import emotion from '../assets/emotion.svg'
import bookmark from '../assets/bookmark.svg'
import today from '../assets/today.svg'

function Home(){
  return(
    <div className='home-container'>
      <div className='button-wrapper'>
        <div className='left-button'>
          <span>나의 감정 차트</span>
          <button><img src={emotion}/></button>
        </div>
        <div className='right-button'>
          <span>동화 모아보기!</span>
          <button><img src={bookmark}/></button>
          <span>일기 쓰러 가기!</span>
          <button><img src={today}/></button>
        </div>
      </div>
      <Calendar/>
    </div>
  )
}
export default Home;