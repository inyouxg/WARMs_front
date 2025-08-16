import { useLocation, useNavigate } from 'react-router-dom'
import mock from '../mock/fairyTale.json'
import home from '../assets/home.svg'
import lesson from '../assets/lesson_icon.png'
import './MyStory.css'
function MyStory() {
  const navigate = useNavigate();
  const location = useLocation();
  const story = location.state?.story || mock[0];

  const storyText = story?.text?.split("교훈")[0];
  console.log(story);
  return (
    <div className="my-story-background-container">
      <div className="my-story-container">
        <div className="title">오늘의 동화</div>
        <div className="diary">
              <div className="my-sketchbook">
                <img className='my-story-img' src={story.image_url} alt="story-img"/>
                <div className='my-story-text'>
                  {storyText}
                </div> 
              </div>
        </div>
        <div className='lesson-wrapper'>
          <img src={lesson}/>
          <span>{story.lesson}</span>
        </div>
        <div className='right-button'>
            <span>메인화면 가기</span>
            <button onClick={() => navigate("/home")}><img src={home}/></button>
        </div>
      </div>
    </div>
  )
}

export default MyStory