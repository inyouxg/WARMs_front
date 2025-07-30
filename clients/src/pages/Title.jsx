import TitleImg from '../assets/Title.png'
import './Title.css'

function Title(){
  return (
    <div className='background-container'>
      <div className='img-wrapper'>
        <img src={TitleImg} className='img'></img>
        <button className='click'>일기 쓰러 가기!</button>
      </div>
    </div>
  )
}

export default Title;