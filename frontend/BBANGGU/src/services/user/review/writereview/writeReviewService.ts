import { writeReviewApi } from '../../../../api/user/review/writereview/writeReviewApi';
import { ReviewFormData, ReviewResponse } from '../../../../types/bakery';

export const writeReviewService = {
  submitReview: async (data: ReviewFormData): Promise<ReviewResponse> => {
    try {
      const response = await writeReviewApi.submitReview(data);
      console.log("response", response)
      return response;
    } catch (error) {
      throw new Error('리뷰 작성에 실패했습니다.');
    }
  },
}; 