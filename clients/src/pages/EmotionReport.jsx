import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './EmotionReport.css'
import diary from '../mock/diary.json'
import EmotionChart from "../components/EmotionChart"

function EmotionReport() {
  const today = diary[0].created_at.slice(0, 10).split("-");

  return(
    <div className="emotion-background-container">
      <div className="report-container">
        <div className="title">감정 분석 결과</div>
        <div className="diary">
          <div className='created-at'>
            {today[0]}년 {today[1]}월 {today[2]}일
          </div>
          <div className='text'>
            {diary[0].text}
          </div>
        </div>
        <div className="emotion-chart">
          <EmotionChart probabilities={diary[0].probabilities} />
          <div>
            {Object.entries(diary[0].probabilities).map(([emotion, percent]) => (
              <p key={emotion}>
                {emotion} : {(percent * 100)}%
              </p>
            ))}
          </div>
        </div>
        <p className='footer-text'>세상에 단 하나뿐인 너의 동화를 만들어봐!</p>
        <button>내 동화 쓰러가기</button>
      </div>
    </div>
  )
}

export default EmotionReport