import { useState } from 'react'
import close from '../assets/close.svg'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import diary from '../mock/diary.json'
import EmotionChart from "../components/EmotionChart"
import './EmotionModal.css'

function EmotionModal({onClose}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentDiary = diary[currentIndex];
  const day = diary[currentIndex].created_at.slice(0, 10).split("-");

  const prevDiary = () => {
    if (currentIndex < diary.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const nextDiary = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
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
            {diary[currentIndex].text}
          </div>
          <div className="emotion-chart">
            <EmotionChart probabilities={diary[currentIndex].probabilities} />
            <div className='emotion-percent'>
              {Object.entries(diary[currentIndex].probabilities).map(([emotion, percent]) => (
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