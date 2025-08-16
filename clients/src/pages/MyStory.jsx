import { useLocation, useNavigate } from 'react-router-dom'
import mock from '../mock/fairyTale.json'
import home from '../assets/home.svg'
import './MyStory.css'
function MyStory() {
  const navigate = useNavigate();
  const location = useLocation();
  const story = location.state?.diary || mock[0];
  console.log(story);
  return (
    <div className="my-story-background-container">
      <div className="my-story-container">
        <div className="title">오늘의 동화</div>
        <div className="diary">
              <div className="my-sketchbook">
                <img className='my-story-img' src={story.imageUrl}/>
                <div className='my-story-text'>
                  {story.text}
                </div> 
              </div>
        </div>
        <div className='cloud-bubble'>{story.lesson}</div>
        <div className='right-button'>
            <span>메인화면 가기</span>
            <button onClick={() => navigate("/home")}><img src={home}/></button>
        </div>
      </div>
    </div>
  )
}

export default MyStory