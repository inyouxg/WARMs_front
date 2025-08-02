import { useState } from 'react';
import TitleImg from '../assets/Title.png'
import LoginModal from '../modal/LoginModal';
import './Title.css'

function Title(){
  const [loginModal, setLoginModal] = useState(false);
  const onClose = () => {
    setLoginModal(false);
  }
  return (
    <div className='background-container'>
      <div className='img-wrapper'>
        <img src={TitleImg} className='img'></img>
        <button className='click' onClick={(e) => setLoginModal(true)}>일기 쓰러 가기!</button>
        {
          loginModal && (
            <LoginModal onClose={onClose}/>
          )
        }
      </div>
    </div>
  )
}

export default Title;