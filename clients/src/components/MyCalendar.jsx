import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./MyCalendar.css"
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import happyImg from '../assets/happy.png'
import sadImg from '../assets/sad.png'
import anxietyImg from '../assets/anxiety.png'
import angryImg from '../assets/angry.png'
import normalImg from '../assets/normal.png'

function MyCalendar({data}) {
  const [date, setDate] = useState(new Date());

  const mockData = [
  { date: "2025-08-09", emotion: "happy" },
  { date: "2025-08-15", emotion: "sad" },
  { date: "2025-08-22", emotion: "angry" },
];

  const emotions = {
    happy : happyImg,
    sad : sadImg,
    anxiety : anxietyImg,
    angry : angryImg,
    normal : normalImg
  }

  const formatDate = (day) => day.toISOString().split("T")[0];

  return (
    <div className="calendar-container">
      <img src='../../images/logo.png' className="logo"/>
      <ReactCalendar
        onChange={setDate}
        value={date}
        maxDetail="month"
        minDetail="month"
        formatDay={(locale, date) => date.getDate()}
        navigationLabel={({date, label}) => <span>{label}</span> }
        prevLabel= {<img src={leftArrow}/>}
        nextLabel={<img src={rightArrow}/>}
        prev2Label={null}
        next2Label={null}
        tileContent={({ date, view }) => {
        if (view !== "month") return null;

        const dateStr = formatDate(date);
        const emotionEntry = mockData.find((item) => item.date === dateStr);

        if (emotionEntry) {
          const icon = emotions[emotionEntry.emotion];
          if (icon) {
            return (
              <div style={{ }}>
                <img
                  src={icon}
                  alt={emotionEntry.emotion}
                  style={{ width: "110px", height: "110px" }}
                />
              </div>
            );
          }
        }
        return null;
        }}
      />
    </div>
  );
}

export default MyCalendar;
