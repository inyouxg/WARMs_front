import { useState } from 'react';
import close from '../assets/close.svg'
import './LoginModal.css'

function JoinModal({onClose}){
  const [rePassword,setRePassword] = useState("");
  const [form,setForm] = useState({
    userId:"", 
    password:""
  });

  //회원가입 제출
  const handleSubmit = async () => {
    const result = await signUpAPI(form);
    if(result.success){
      alert("회원가입을 완료하였습니다.");
      onClose();
    }else{
      alert(result.error);
      console.log(result.error);
      //에러 메세지 출력
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name] : value});
  };

  const isFormValid =
    form.userId.trim() &&
    form.password.trim() &&
    rePassword.trim() &&
    (form.password === rePassword);

    return(
    <div className="login-modal-container">
      <div className="login-modal-wrapper">
        <img src={close} onClick={onClose}/>
        <div className="title">회원가입</div>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='login-id'>아이디</label>
            <input id="login-id" 
              type="text"
              name='userId'
              value={form.userId}
              onChange={handleChange}
              />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='login-password'>비밀번호</label>
            <input id='login-password' 
              type="password"
              name='password'
              value={form.password}
              onChange={handleChange}
              />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='login-password-confirm'>비밀번호 확인</label>
            <input id='login-password-confirm' 
              type="password"
              placeholder='비밀번호를 다시 입력해 주세요.'
              onChange={(e) => setRePassword(e.target.value)}/>
              { 
              rePassword && (
              form.password !== rePassword ? 
              (<span style={{ paddingLeft: "3px", color: "red", fontSize: "12px" }}>비밀번호가 일치하지 않습니다.</span>) : 
              (<span style={{ paddingLeft: "3px", color: "green", fontSize: "12px" }}>비밀번호가 일치합니다.</span>))}
          </div>
          <button type="submit" 
            className='submit-button'
            disabled={!isFormValid}>회원가입</button>
        </form>
      </div>
    </div>
  )
}

export default JoinModal