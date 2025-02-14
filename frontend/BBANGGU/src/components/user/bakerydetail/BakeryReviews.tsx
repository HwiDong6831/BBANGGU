import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { ReviewType, UserType } from "../../../types/bakery"

interface BakeryReviewsProps {
  bakeryId: number
  reviews: ReviewType[]
  user: UserType
}

export default function BakeryReviews({ bakeryId, reviews, user }: BakeryReviewsProps) {
  if (reviews.length === 0) {
    return (
      <div className="py-[15px]">
        <h2 className="text-[16px] font-bold mb-[15px]">리뷰 구경하기</h2>
        <p className="text-[14px] text-[#757575]">아직 리뷰가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className="py-[15px]">
      <Link to={`/user/bakery/${bakeryId}/reviews`} className="mb-[15px] flex w-full items-center justify-between">
        <h2 className="text-[16px] font-bold text-[#333333]">리뷰 구경하기</h2>
        <ChevronRight className="h-5 w-5" />
      </Link>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.slice(0, 2).map((review) => {
            return (
              <div key={review.reviewId} className="flex gap-4">
                {review.reviewImageUrl && (
                  <img
                    src={review.reviewImageUrl || "/placeholder.svg"}
                    alt="Review"
                    className="h-[162px] w-[142px] rounded-xl object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div className="space-y-[16px]">
                    <div className="flex gap-1">
                      {Array(review.rating)
                        .fill("⭐")
                        .map((star, i) => (
                          <span key={`star-${review.reviewId}-${i}`} className="text-[10px]">
                            {star}
                          </span>
                        ))}
                    </div>
                    <p className="text-[14px] text-[#757575] line-clamp-2">{review.content}</p>
                  </div>
                  <div className="flex items-center justify-between text-[13px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <img
                        src={user.profileImageUrl || "/placeholder.svg"}
                        alt={user.name}
                        className="w-[27px] h-[27px] rounded-full object-cover"
                      />
                      <span className="text-[#606060]">{user.name}</span>
                    </div>
                    <span className="text-[#D3D3D3]">{new Date(review.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p className="text-[14px] text-[#757575]">아직 리뷰가 없습니다.</p>
      )}
    </div>
  )
}

