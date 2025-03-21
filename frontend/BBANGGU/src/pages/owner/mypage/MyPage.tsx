import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BottomNavigation from '../../../components/owner/navigations/BottomNavigations/BottomNavigation';
import { PageHeader } from '../../../components/owner/mypage/PageHeader';
import { ProfileSection } from '../../../components/owner/mypage/ProfileSection';
import { MenuList } from '../../../components/owner/mypage/MenuList';
import { CustomerSupport } from '../../../components/owner/mypage/CustomerSupport';
import { AccountManagement } from '../../../components/owner/mypage/AccountMagagement';
import { store } from '../../../store';
import { getLocalStorage, logout, removeLocalStorage } from '../../../store/slices/authSlice';
import { clearUserInfo, setBakeryId } from '../../../store/slices/userSlice';
import { getUserInfo } from '../../../api/user/user';
import { getBakeryByUserId } from '../../../api/bakery/bakery';

function MyPage() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // const userInfo = useSelector((state: RootState) => state.user.userInfo)
  // const { accessToken } = useSelector((state: RootState) => state.auth);

  const accessToken = store.getState().auth.accessToken;

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!accessToken) {
        dispatch(getLocalStorage());
        return;
      }

      try {
        await getUserInfo();
        const bakery = await getBakeryByUserId();
        store.dispatch(setBakeryId(bakery.bakeryId));
        // console.log("store.getState().user.userInfo", store.getState().user.userInfo);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [dispatch, navigate, accessToken]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUserInfo());
    dispatch(removeLocalStorage());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <PageHeader />
      <ProfileSection />
      <MenuList />
      <CustomerSupport />
      <AccountManagement onLogout={handleLogout} />
      <BottomNavigation />
    </div>
  );
}

export default MyPage;
