import { useState } from "react";
import './DiaryWriting.css'
function DiaryWriting(){
  const [content, setContent] = useState("");
  const maxLength = 1000;

  return (
    <div className="diary-background-container">
      <div className="diary-container">
        <div className="title">일기 작성하기</div>
        <textarea 
          type="text"
          placeholder="오늘의 이야기를 글로 적어보자!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={12}
          maxLength={maxLength}
          />
          <div className="diary-footer">
            <div>
              <span>{content.length} / {maxLength}</span>
            </div>
            <div className="diary-button"> 
              <button>저장</button>
              <button>종료</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DiaryWriting