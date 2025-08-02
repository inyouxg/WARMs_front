import { useState } from 'react';
import JoinModal from './JoinModal';
import close from '../assets/close.svg'
import './LoginModal.css'

function LoginModal({onClose}){
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    console.log("로그인 시도!");
  };
  const [joinModal, setJoinModal] = useState(false);

  return(
    <div className="modal-container">
      <div className="modal-wrapper">
        <img src={close} onClick={onClose}/>
        <div className="title">로그인</div>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='login-id'>ID</label>
            <input id="login-id" type="text"/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='login-password'>password</label>
            <input id='login-password' type="password"/>
          </div>
          <button type="submit" className='submit-button'>로그인</button>
        </form>
        <button className='join-button'
          onClick={() => setJoinModal(true)}
          >회원가입하러 가기!</button>
          {joinModal &&
            <JoinModal onClose={onClose}/>
          }
      </div>
    </div>
  )
}

export default LoginModal