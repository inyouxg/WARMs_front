import axiosInstance from "./axiosInstance";

export const writingAPI = async (content) => {
  try {
    const res = await axiosInstance.post("/diary/save", {
      text: content,
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
