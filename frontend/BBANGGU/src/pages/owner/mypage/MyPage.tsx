import { Header } from '../../../components/owner/mypage/Header';
import { ProfileSection } from '../../../components/owner/mypage/ProfileSection';
import { MenuList } from '../../../components/owner/mypage/MenuList';
import { CustomerSupport } from '../../../components/owner/mypage/CustomerSupport';
import { AccountManagement } from '../../../components/owner/mypage/AccountMagagement';
import BottomNavigation from '../../../components/owner/navigations/BottomNavigations/BottomNavigation';

function MyPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="마이페이지" />
      <ProfileSection 
        name="권가롱이"
        description="오늘도 빵과 함께 할기찬 하루 보내세요~"
      />
      <MenuList />
      <CustomerSupport />
      <AccountManagement />
      <BottomNavigation />
    </div>
  );
}

export default MyPage;