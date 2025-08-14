import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EmotionChart from "../components/EmotionChart"
import {storyAPI} from '../api/postAPI'
import LoadingModal from '../modal/LoadingModal';
import mock from '../mock/diary.json'
import './EmotionReport.css'

function EmotionReport() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [story, setStory] = useState([]);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const diary = location.state?.diary || mock[0];// 일기 데이터 꺼내기, 데이터 없으면 mock으로 대체
  console.log(diary?.id); //id 있는지 확인하기..
  const today = diary?.created_at?.slice(0, 10)?.split("-");

  useEffect(() => {
    if (!diary) {
      alert("diary data가 존재하지 않습니다.");
    }
    console.log(diary);
  },[diary])

    const handleSubmit = async () => {
      setModalOpen(true);
      setProgress(0);

      // 가짜 로딩바 진행률 (95%까지)
      let p = 10;
      setProgress(p);
      timerRef.current = setInterval(() => {
        const step = p > 85 ? 0.5 : p > 60 ? 1 : 2;
        p = Math.min(95, Math.floor(p + Math.random() * step + 0.5));
        setProgress(p);
      }, 200);

    try{
      const result = await storyAPI(diary?.id);
      if(result.success){
        setProgress(100);
        await new Promise(r => setTimeout(r, 250));
        console.log("동화 생성 POST");
        setStory(result.data); // imageUrl, text, id, created_at 응답해줌
        navigate("home/writing/report/story", { state: { story: result.data } })
      }else{
        setProgress(100);
        await new Promise(r => setTimeout(r, 250));
        alert(result.error || "POST API 요청에 오류가 발생하였습니다.");
        console.error("POST API 요청 실패", result.error);
      }
    }catch(err){
      setProgress(100);
      await new Promise(r => setTimeout(r, 250));
      console.error("네트워크 오류 발생", err);
    }finally{
      clearInterval(timerRef.current);
      timerRef.current = null;
      setModalOpen(false);
      setProgress(0);
    }
  }


  return(
    <div className="report-background-container">
      <div className="report-container">
        <div className="title">감정 분석 결과</div>
        <div className="diary">
          <div className='created-at'>
            { today ? `${today[0]}년 ${today[1]}월 ${today[2]}일` : "" }
          </div>
          <div className='report-text'>
            {diary?.text}
          </div>
        </div>
        <div className="report-emotion-chart">
          <EmotionChart probabilities={diary?.probabilities} />
          <div>
            {Object.entries(diary?.probabilities).map(([emotion, percent]) => (
              <p key={emotion}>
                {emotion} : {(percent * 100)}%
              </p>
            ))}
          </div>
        </div>
        <p className='footer-text'>세상에 단 하나뿐인 너의 동화를 만들어봐!</p>
        <button onClick={handleSubmit}>내 동화 쓰러가기</button>
      </div>
      <LoadingModal open={modalOpen} progress={progress} />
    </div>
  )
}

export default EmotionReport