import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import OnboardingPage from "./pages/onboarding";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import CustomerSignupPage from "./pages/signup/customer";
import OwnerSignupPage from "./pages/signup/owner";
import UserMain from "./pages/user/main/UserMain";
import BakeryDetail from "./pages/user/detail/BakeryDetail";
import EditProfile from "./pages/owner/profile/EditProfile";
import EditSettlement from "./pages/owner/settlement/EditSettlement";
import MyPage from "./pages/owner/mypage/MyPage";
import EditStore from "./pages/owner/store/EditStore";
import PickupTime from "./pages/owner/pickup/PickupTime";
import CustomerSupport from "./pages/owner/support/CustomerSupport";
import MobileLayout from "./layouts/MobileLayout";
import ReportPage from "./pages/owner/report"
import UserReview from "./pages/user/review/UserReview";
import "./styles/fonts.css";
import { ProfileProvider } from "./common/context/ProfileContext";
import UserMyPage from "./pages/user/mypage/UserMyPage";
import { ReservationHistory } from "./pages/user/mypage/reservation/ReservationHistory"
import { ReservationDetail } from "./pages/user/mypage/reservation/ReservationDetail"
import { UserEditProfile } from "./pages/user/mypage/editprofile/editprofile"
import OwnerMainPage from "./pages/owner/mainpage/OwnerMainPage";
import  { UserPayment } from "./pages/user/payment/UserPayment"
import { UserSaveReport } from "./pages/user/mypage/usersavereport/UserSaveReport"
import { Notification } from "./pages/user/mypage/notification/Notification"


export default function App() {
  return (

    <ProfileProvider>
      <Router>
        <MobileLayout>
          <Routes>
            {/* 기본 라우트 설정 */}
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/customer" element={<CustomerSignupPage />} />
            <Route path="/signup/owner" element={<OwnerSignupPage />} />


            {/* 사용자 관련 페이지 */}
            <Route path="/user" element={<UserMain />} />
            <Route path="/user/bakery/:bakery_id" element={<BakeryDetail />} />
            <Route path="/user/bakery/:bakery_id/reviews" element={<UserReview />} />
            <Route path="/user/:user_id/mypage" element={<UserMyPage />} />
            <Route path="/user/mypage/edit" element={<UserEditProfile />} />
            <Route path="/user/mypage/save-report" element={<UserSaveReport />} />
            <Route path="/user/mypage/notifications" element={<Notification />} />
            <Route path="/user/reservations" element={<ReservationHistory />} />
            <Route path="/user/reservation/:reservation_id" element={<ReservationDetail />} />
            <Route path="/user/payment" element={<UserPayment />} />

            {/* 점주 관련 페이지 */}
            <Route path="/owner/profile/edit" element={<EditProfile />} />
            <Route path="/owner/settlement/edit" element={<EditSettlement />} />
            <Route path="/owner/mypage" element={<MyPage />} />
            <Route path="/owner/store/edit" element={<EditStore />} />
            <Route path="/owner/pickup-time" element={<PickupTime />} />
            <Route path="/owner/chatbot" element={<CustomerSupport />} />
            <Route path="/owner/report" element={<ReportPage />} />
            <Route path="/owner/main" element={<OwnerMainPage />} />
          </Routes>
        </MobileLayout>
      </Router>

    </ProfileProvider>

  );
}
