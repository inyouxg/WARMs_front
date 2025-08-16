import { useLocation } from 'react-router-dom'
import './MyStory.css'
import mock from '../mock/fairyTale.json'
function MyStory() {
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
      </div>
    </div>
  )
}

export default MyStory