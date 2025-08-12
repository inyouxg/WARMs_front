import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css"
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'
import happyImg from '../assets/happy.png'
import sadImg from '../assets/sad.png'
import anxietyImg from '../assets/anxiety.png'
import angryImg from '../assets/angry.png'
import embarrassedImg from '../assets/embarrassed.png'
import hurtImg from '../assets/hurt.png'

function MyCalendar({data, onSelectDate}) {
  const [date, setDate] = useState(new Date());

  const labelChange = (label) => {
    const map = {
      "기쁨": "happy",
      "슬픔": "sad",
      "분노": "angry",
      "불안": "anxiety",
      "당황": "embarrassed",
      "상처": "hurt"
    }
    return map[label] ?? null;
  }
  const emotions = {
    happy : happyImg,
    sad : sadImg,
    anxiety : anxietyImg,
    angry : angryImg,
    hurt : hurtImg,
    embarrassed : embarrassedImg
  }

  const formatDate = (day) => 
  (typeof day === "string" && day.length >= 10)
    ? day.slice(0, 10)
    : new Date(day).toLocaleDateString("en-CA");

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
        prevLabel= {<img src={leftArrow} alt="prev"/>}
        nextLabel={<img src={rightArrow} alt="next"/>}
        prev2Label={null}
        next2Label={null}
        onClickDay={(value) => {
          setDate(value);
          onSelectDate?.(formatDate(value));
        }}
        tileContent={({ date : tileDate, view }) => {
        if (view !== "month") return null;

        const dateStr = formatDate(tileDate);
        const emotionLabel = data.find((item) => formatDate(item.created_at) === dateStr);

        if (emotionLabel) {
          const iconLabel = labelChange(emotionLabel.label);
          const icon = emotions[iconLabel];
          if (icon) {
            return (
              <div>
                <img
                  src={icon}
                  alt={emotionLabel.label}
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
