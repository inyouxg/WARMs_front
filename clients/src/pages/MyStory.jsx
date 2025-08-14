import { useLocation } from 'react-router-dom'
import mock from '../mock/fairyTale.json'
function MyStory() {
  const location = useLocation();

  const story = location.state?.diary || mock[0];
  return (
    <div className="report-background-container">
          <div className="report-container">
            <div className="title">오늘의 동화</div>
            <div className="diary">
              <div className='created-at'>
                <img src={story.imageUrl}/>
              </div>
              <div className='report-text'>
                {story.text}
              </div>
            </div>
            <p className='footer-text'></p>
          </div>
        </div>
  )
}

export default MyStory