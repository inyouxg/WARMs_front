import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import "./MyCalendar.css"
import leftArrow from '../assets/leftArrow.svg'
import rightArrow from '../assets/rightArrow.svg'

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
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

      />
    </div>
  );
}

export default MyCalendar;
