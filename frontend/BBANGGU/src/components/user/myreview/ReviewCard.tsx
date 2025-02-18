import { Star } from 'lucide-react';
import type { ReviewType } from '../../../store/slices/reviewSlice';

interface ReviewCardProps {
  review: ReviewType;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      {review.reviewImageUrl && (
        <div className="mb-3">
          <img
            src={review.reviewImageUrl}
            alt="리뷰 이미지"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      <p className="text-gray-700 text-">{review.content}</p>
        <span className="flex justify-end text-sm text-gray-400">
          {new Date(review.createdAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
    </div>
  );
}; 