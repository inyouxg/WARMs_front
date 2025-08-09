import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EmotionChart from "../components/EmotionChart"
import diary from '../mock/diary.json'
import './EmotionReport.css'

function EmotionReport() {
  const location = useLocation();
  const diary = location.state?.diary;// 일기 데이터 꺼내기

  if (!diary) {
    alert("diary data가 존재하지 않습니다.");
  }
  console.log(diary);

  const today = diary.created_at.slice(0, 10).split("-");

  return(
    <div className="report-background-container">
      <div className="report-container">
        <div className="title">감정 분석 결과</div>
        <div className="diary">
          <div className='created-at'>
            {today[0]}년 {today[1]}월 {today[2]}일
          </div>
          <div className='report-text'>
            {diary.text}
          </div>
        </div>
        <div className="report-emotion-chart">
          <EmotionChart probabilities={diary.probabilities} />
          <div>
            {Object.entries(diary.probabilities).map(([emotion, percent]) => (
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