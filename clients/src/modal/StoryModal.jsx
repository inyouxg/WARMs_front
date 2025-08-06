import { useState } from 'react'
import close from '../assets/close.svg'
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import diary from '../mock/diary.json'
import story from '../mock/fairyTale.json'
import "./StoryModal.css"

function StoryModal({onClose}){
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
    <div className="modal-container">
      <div className="modal-wrapper">
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
        <div className="sketchbook">
          <img src={story[currentIndex].imageUrl} />
          <p>{story[currentIndex].text}</p>
        </div>
      </div>
    </div>
  )
}
export default StoryModal