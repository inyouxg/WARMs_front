import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginAPI } from '../api/loginAPI'
import JoinModal from './JoinModal';
import close from '../assets/close.svg'
import './LoginModal.css'

function LoginModal({onClose}){
  const navigate = useNavigate();
  const [joinModal, setJoinModal] = useState(false);
  const [form,setForm] = useState({
    userId:"", 
    password:""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});
  };

  //서버에 로그인 요청
  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await loginAPI(form.userId, form.password);

    if(login.success){
      alert("로그인 되었습니다.");
      onClose();
      navigate('/home');
    }else {
      alert("로그인에 실패 하였습니다. 다시 한 번 확인해 주세요.");
    }
  }

  return(
    <div className="login-modal-container">
      <div className="login-modal-wrapper">
        <img src={close} onClick={onClose}/>
        <div className="title">로그인</div>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='login-id'>ID</label>
            <input id="login-id"
              type="text"
              name='userId'
              value={form.userId}
              onChange={handleChange}/>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='login-password'>password</label>
            <input id='login-password'
              type="password"
              name='password'
              value={form.password}
              onChange={handleChange}/>
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