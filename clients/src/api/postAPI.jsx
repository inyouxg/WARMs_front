import axiosInstance from "./axiosInstance";

export const writingAPI = async (content, createdAtISO) => {
  try {
    const res = await axiosInstance.post("/diary/save", {
      text: content,
      created_at: createdAtISO,
    });
    return { 
      success: true,
      data: res.data
    };
  } catch (err) {
    console.error("일기 저장 실패", err);
    return { 
      success: false, 
      error: err.response?.data?.message || "일기 저장 실패" };
  }
};

export const storyAPI = async (diaryId) => {
  try {
    const res = await axiosInstance.post(`/diary/${diaryId}/story`);
    return { 
      success: true, 
      data: res.data };
  } catch (err) {
    console.error("동화 생성 실패", err);
    return { 
      success: false, 
      error: err?.response?.data?.detail || err.message };
  }
};
