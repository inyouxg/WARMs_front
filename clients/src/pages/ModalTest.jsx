import { useState } from "react";
import LoadingModal from "../modal/LoadingModal";

export default function ModalTest() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const startLoading = () => {
    setOpen(true);
    setProgress(0);

    let p = 0;
    const timer = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => setOpen(false), 500); // 0.5초 뒤 닫기
      }
    }, 200);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>로딩 모달 테스트</h1>
      <button onClick={startLoading}>모달 띄우기</button>
      <LoadingModal open={open} progress={progress} />
    </div>
  );
}
