import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { writingAPI } from "../api/postAPI";
import './DiaryWriting.css'

function DiaryWriting(){
  const navigate = useNavigate();
  const location = useLocation();

  const [content, setContent] = useState("");
  const [data,setData] = useState([]);
  const maxLength = 1000;

  const selectedDateStr = location.state?.date || new Date().toLocaleDateString("en-CA");
  const createdAtISO = new Date(selectedDateStr).toISOString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await writingAPI(content, createdAtISO);
      if(result.success){
        console.log("일기 전송 완료");
        setData(result.data);
        navigate("report", { state: { diary: result.data } });
      }else{
        alert(result.error || "일기 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        console.error(result.error || "일기 전송 실패.");
      }
    }catch(err){
      console.error(err);
      alert("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  }

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
              <button onClick={handleSubmit}>저장</button>
              <button onClick={() => navigate("/home")}>종료</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DiaryWriting