import { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance'
import close from '../assets/close.svg'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import diary from '../mock/diary.json'
import EmotionChart from "../components/EmotionChart"
import happyImg from '../assets/happy.png'
import './EmotionModal.css'

function EmotionModal({onClose}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);

  const onKeyDown = (e) => {
    if(e.key === "Escape"){
      e.preventDefault();
      onClose();
    }}

    useEffect(() => {
      window.addEventListener("keydown", onKeyDown);
      return () => {
        window.removeEventListener("keydown", onKeyDown);
      };
    }, [onClose])

  
  useEffect(() => {
    axiosInstance.get("/diary/statistics")
    .then((res) => {
      setData(res.data);
    }).catch((err) => {
      console.error("emotion chart 호출 실패", err);
    })
  }, []);
  
  const hasData = data.length > 0;
  const current = hasData ? data[currentIndex] : null;

  const day = current?.created_at?.slice(0, 10).split("-");

  const prevDiary = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const nextDiary = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if(!hasData){
    return(
      <div className="emotion-modal-container">
        <div className="emotion-modal-wrapper">
          <img className="close-button" src={close} onClick={onClose} />
          <img src={happyImg} style={{width: "100%"}}/>
          <div className="title">로딩 중…</div>
        </div>
      </div>
    );
  }

  return(
    <div className="emotion-modal-container">
      <div className="emotion-modal-wrapper">
        <img className="close-button" src={close} onClick={onClose}/>
        <div className="title">
          <img className="left-arrow" 
            onClick={prevDiary}
            src={leftArrow}/>
            {day[0]}년 {day[1]}월 {day[2]}일
            <img className='right-arrow' 
            src={rightArrow}
            onClick={nextDiary}/>
        </div>
        <div className='diary'>
          <div className='text'>
            {current?.text}
          </div>
          <div className="emotion-chart">
            <EmotionChart probabilities={current?.probabilities} />
            <div className='emotion-percent'>
              {Object.entries(current.probabilities).map(([emotion, percent]) => (
                <p key={emotion}>
                  {emotion} : {(percent * 100)}%
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmotionModal