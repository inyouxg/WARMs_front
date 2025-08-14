import happyImg from '../assets/happy.png'
import './LoadingModal.css'
function LoadingModal({open, progress = 0}){
  if(!open) return null;
  const percent = Math.round(
    progress < 0 ? 0 : progress > 100 ? 100 : progress
  );
  return(
    <div className="loading-modal-container">
      <div className="loading-modal-wrapper">
        <div className="title">동화가 그려지고 있어요...</div>
        <img src={happyImg} />
        <div className="progress-bar" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        <p>조금만 기다려 주세요!</p>
      </div>
    </div>
  )
}
export default LoadingModal