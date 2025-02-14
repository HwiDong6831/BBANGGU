import axios from 'axios';
import { ApiResponse } from '../../../types/response';
import type { UserType, ReservationType, EchoSaveType } from '../../../types/bakery';

// const BASE_URL = 'http://127.0.0.1:8080';
// const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://13.124.56.79:8081';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const mypageApi = {
    getUsersApi: async () => {
      try {
        const token = localStorage.getItem("accessToken") || import.meta.env.VITE_MOCK_ACCESS_TOKEN || "";
        const response = await axios.get<ApiResponse<UserType[]>>(
          `${BASE_URL}/user`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data.data;
      } catch (error) {
        console.error('유저 조회 실패:', error);
        throw error;
      }
    },

    getReservationsApi: async () => {
      try {
        const token = localStorage.getItem("accessToken") || import.meta.env.VITE_MOCK_ACCESS_TOKEN || "";
        const response = await axios.get<ApiResponse<ReservationType[]>>(
          `${BASE_URL}/reservation`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );
        console.log("예약 데이터", response.data.data);
        return response.data.data;
      } catch (error) {
        console.error('예약 목록 조회 실패:', error);
        throw error;
      }
    },

    getEchoSavesApi: async () => {
      try {
        const token = localStorage.getItem("accessToken") || import.meta.env.VITE_MOCK_ACCESS_TOKEN || "";
        const response = await axios.get<ApiResponse<EchoSaveType[]>>(
          `${BASE_URL}/echosave`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("절약 데이터", response.data.data);
        return response.data.data;
      } catch (error) {
        console.error('절약 데이터터 조회 실패:', error);
        throw error;
      }
    },
    

}

