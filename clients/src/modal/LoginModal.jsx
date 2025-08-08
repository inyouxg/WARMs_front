import { useState } from 'react';
import JoinModal from './JoinModal';
import close from '../assets/close.svg'
import './LoginModal.css'

function LoginModal({onClose}){
  //서버에 로그인 요청
  const handleSubmit = async () => {
    const login = await loginAPI(userId, password);
    if(login.success){
      if(autoLogin) localStorage.setItem("autoLogin", "true");
      else localStorage.removeItem("autoLogin");
      alert("로그인 되었습니다.");
      onLogin(login.user);
      onClose();
    }else {
      alert("로그인에 실패 하였습니다. 다시 한 번 확인해 주세요.");
    }
  }
  const [joinModal, setJoinModal] = useState(false);

  return(
    <div className="login-modal-container">
      <div className="login-modal-wrapper">
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