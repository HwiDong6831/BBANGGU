import axios from "axios";
import { ApiResponse } from "../../../types/response";
import { store } from '../../../store';
import type { ReviewState, ReviewType } from '../../../store/slices/reviewSlice';
import { BakeryRating } from "../../../types/bakery";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const reviewApi = {
    getReviews: async (bakeryId: number): Promise<ReviewType[]> => {
    try {
      const token = store.getState().auth.accessToken;  
      const response = await axios.get<ApiResponse<ReviewType[]>>(
        `${BASE_URL}/review/bakery/${bakeryId}`,
        { withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data.data.map(review => ({
        ...review
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`리뷰 조회 실패 - 가게(${bakeryId}):`, error);
        throw error;
      }
      throw error;
    }
  }, 
  // 새로운 평균별점 요청 함수
  getAverageRating: async (bakeryId: number): Promise<BakeryRating> => {
    try {
      const response = await axios.get<ApiResponse<BakeryRating>>(
        `${BASE_URL}/review/${bakeryId}/rating`,
        { withCredentials: true }
      );
      return response.data.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(`평균별점 조회 실패 - 가게(${bakeryId}):`, error);
      }
      throw error;
    }
  },

  getUserReviews: async (userId: string): Promise<ReviewState> => {
    try {
      const token = store.getState().auth.accessToken;
      const response = await axios.get<ApiResponse<ReviewState>>(
        `${BASE_URL}/review/user/${userId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data.data;
    } catch (error) {
      console.error('유저 리뷰 조회 실패:', error);
      throw error;
    }
  },
  deleteReview: async (reviewId: number): Promise<void> => {
    try {
      const token = store.getState().auth.accessToken;
      await axios.delete<ApiResponse<void>>(`${BASE_URL}/review/${reviewId}`, { withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('리뷰 삭제 실패:', error);
      }
      throw error;
    }
  },
};

