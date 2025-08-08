import axiosInstance from "./axiosInstance";

//로그인 API
export const loginAPI = async (userId, password) => {
  try {
    const res = await axiosInstance.post(
      "/login",
      { userId, password },
      { withCredentials: true }
    );
    if (res.data && res.data.token && res.data.user) {
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
    } 
    return { success: true, user: res.data.user };
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.message || "로그인 실패",
    };
  }
};

//토큰 재발급 요청
export const refreshTokenAPI = async (form) => {
  try {
    const res = await axiosInstance.post("/refresh", 
      {},
      {withCredentials: true}
    ); //accessToken 만료시, 토큰 재발급 요청

    if (res.data.token) {
      localStorage.setItem("accessToken", res.data.token);
      return true;
    }
  } catch (err) {
    console.error("토큰 재발급 실패", err);
  }
  return false;
};

//로그아웃 API
export const logoutAPI = async () => {
  try {
    const res = await axiosInstance.post("/logout");
    return { 
      success: true 
    };
  } catch (err) {
    console.error("로그아웃 실패", err);
    return { success: false, error: err.response?.data?.message || "로그아웃 실패" };
  }
};

//회원가입 API
export const signUpAPI = async (form) => {
  try{
    const res = await axiosInstance.post("/register", form);

    return {
      success: true,
      user: res.data.user,
    };
  } catch(err){
    return {
      success: false,
      error: err.response?.data?.message || "회원가입 실패",
    }
  }
}