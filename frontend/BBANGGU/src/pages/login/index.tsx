import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { User, Lock } from "lucide-react"
import { login } from "../../api/common/login/login"
import { getKakaoLoginUrl } from "../../api/common/login/KakaoLogin"
import { getUserInfo } from "../../api/user/user"
import { setUserInfo } from "../../store/slices/userSlice"
import { store } from "../../store"
import { logout, removeLocalStorage } from "../../store/slices/authSlice"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const token = store.getState().auth.accessToken;
  //   console.log('token', token)
  //   if (token) {
  //     const userInfo = store.getState().user.userInfo;
  //   if (userInfo) {
  //     if (userInfo.role === 'OWNER') {
  //       navigate('/owner/main');
  //     } else if (userInfo.role === 'USER') {
  //         navigate('/user');  
  //       }
  //     }
  //   }
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.')
      return
    }

    setIsLoading(true)
    try {
      const accessToken = store.getState().auth.accessToken;
      console.log('accessToken', accessToken)
      dispatch(logout())
      dispatch(removeLocalStorage())

      // 1. 로그인 API 호출
      await login(formData, dispatch)

      // 4. 사용자 정보 가져오기
      const userResponse = await getUserInfo()
      console.log('사용자 정보 API 응답 전체:', userResponse)
      console.log('bakeryId 확인:', userResponse.bakeryId)
      
      dispatch(setUserInfo(userResponse))
      
      // 6. 최종 Redux 상태 확인
      const state = store.getState()
      console.log('Redux store 최종 상태:', state.user.userInfo)

      // 사용자 역할에 따른 리다이렉션
      if (state.user.userInfo?.role === 'OWNER') {
        navigate('/owner/main')
      } else if (state.user.userInfo?.role === 'USER') {
        navigate('/user')
      } else {
        navigate('/')
      }
    } catch (error) {
      console.error('로그인 에러:', error)
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('로그인 중 오류가 발생했습니다.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleKakaoLogin = async () => {
    setIsLoading(true)
    try {
      const response = await getKakaoLoginUrl()
      if (response.data) {
        window.location.href = response.data
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('카카오 로그인 중 오류가 발생했습니다.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex justify-center mt-32 mb-10">
        <img
          src="/icon/bbanggu-logo2.png"
          alt="빵꾸 아이콘"
          className="w-[300px] h-48 object-contain"
        />
      </div>

      <main className="flex-1 flex flex-col justify-start px-8">
        <div className="w-full max-w-[500px] space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 rounded-xl outline-none text-base placeholder:text-gray-400 border border-gray-200 focus:border-[#FF9F43] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 rounded-xl outline-none text-base placeholder:text-gray-400 border border-gray-200 focus:border-[#FF9F43] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
              />
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-[#FF9F43] text-white rounded-full font-medium text-base hover:bg-[#ff9029] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isLoading ? "로그인 중..." : "로그인"}
              </button>
              <button
                type="button"
                onClick={handleKakaoLogin}
                disabled={isLoading}
                className="w-full h-14 bg-[#FEE500] rounded-full font-medium text-[#000000] text-base flex items-center justify-center gap-2 hover:bg-[#ffd900] transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20633268-bowb3Uiun1OO8jXhzPmxfzIBQicmXx.png"
                  alt="카카오"
                  className="w-6 h-6"
                />
                카카오톡으로 로그인
              </button>
            </div>
          </form>

          <div className="flex justify-center space-x-4 text-sm text-gray-500">
            <button 
              type="button" 
              onClick={() => navigate("/signup")} 
              disabled={isLoading}
              className="hover:text-[#FF9F43] transition-colors disabled:hover:text-gray-500"
            >
              회원가입
            </button>
            <div className="text-gray-300">|</div>
            <button
              type="button"
              onClick={() => navigate("/password/change")}
              disabled={isLoading}
              className="hover:text-[#FF9F43] transition-colors disabled:hover:text-gray-500"
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}