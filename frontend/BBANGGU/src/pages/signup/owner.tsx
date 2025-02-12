import { useState, useEffect, useRef } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/signup/Button"
import { InputField } from "../../components/signup/InputField"
import { PasswordStep } from "./steps/PasswordStep"
import { PhoneStep } from "./steps/PhoneStep"
import { StoreInfoStep } from "./steps/StoreInfoStep"
import { SettlementInfoStep } from "./steps/SettlementInfoStep"
import { SignupCompleteStep } from "./steps/SignupCompleteStep"
import { OwnerApi } from "../../api/common/signup/OwnerApi"

type SignupStep = "email" | "password" | "phone" | "store" | "settlement" | "complete"

export default function OwnerSignupPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState<SignupStep>("email")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailVerificationCode: "",
    password: "",
    confirmPassword: "",
    phone: "",
    phoneVerificationCode: "",
    storeName: "",
    storeAddress: "",
    storeAddressDetail: "",
    storePhoto: "",
    accountName: "",
    accountHolder: "",
    accountNumber: "",
    taxEmail: "",
    businessRegistration: "",
  })
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useState(false)
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isPhoneVerificationSent, setIsPhoneVerificationSent] = useState(false)
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)

  const mainRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if ((currentStep === "store" || currentStep === "settlement") && mainRef.current) {
      console.log("Scrolling to top:", mainRef.current);
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.scrollTo({ top: 0, behavior: "smooth" }); // ✅ 확실하게 스크롤 적용
        }
      }, 0);
    }
  }, [currentStep]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailVerification = async () => {
    try {
      await OwnerApi.sendEmailVerification(formData.email);
      setIsEmailVerificationSent(true);
      alert('인증번호가 전송되었습니다.');
    } catch (error: any) {
      if (error.code === 3001) {
        alert('너무 많은 요청을 보냈습니다. 나중에 다시 시도하세요.');
      } else {
        alert(error.message || '인증번호 전송에 실패했습니다.');
      }
    }
  }

  const handleEmailVerificationSubmit = async () => {
    try {
      await OwnerApi.verifyEmail(formData.email, formData.emailVerificationCode);
      setIsEmailVerified(true);
      alert('이메일이 인증되었습니다.');
    } catch (error: any) {
      if (error.code === 3002) {
        alert('인증번호가 일치하지 않습니다. 다시 확인해주세요.');
      } else if (error.code === 3004) {
        alert('이미 사용된 인증 코드입니다.');
      } else {
        alert(error.message || '이메일 인증에 실패했습니다.');
      }
    }
  }

  const handlePasswordSubmit = () => {
    setCurrentStep("phone")
  }

  const handlePhoneVerification = () => {
    // TODO: Implement phone verification logic
    console.log("Sending verification SMS to:", formData.phone)
    setIsPhoneVerificationSent(true)
  }

  const handlePhoneVerificationSubmit = () => {
    if (formData.phone) {  // 전화번호가 입력되어 있다면
      setCurrentStep("store");  // store 단계로 이동 (owner는 complete가 아닌 store로 이동)
    }
  }

  const handleStoreInfoSubmit = async () => {
    try {
      // 먼저 회원가입
      const userResponse = await OwnerApi.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phone
      });

      // 가게 정보 등록
      await OwnerApi.registerStore({
        name: formData.storeName,
        description: formData.storeDescription,
        businessRegistrationNumber: formData.businessNumber,
        addressRoad: formData.storeAddress,
        addressDetail: formData.storeAddressDetail,
        photoUrl: formData.storePhoto,
        userId: userResponse.data.userId
      });

      setCurrentStep("complete");
    } catch (error: any) {
      if (error.code === 1006) {
        alert('이미 사용 중인 이메일입니다.');
      } else if (error.code === 1008) {
        alert('이미 사용 중인 전화번호입니다.');
      } else if (error.code === 2000) {
        alert('이미 존재하는 사업자 등록 번호입니다.');
      } else if (error.code === 2001) {
        alert('이미 존재하는 가게 이름입니다.');
      } else {
        alert(error.message || '회원가입에 실패했습니다.');
      }
    }
  }

  const handleSettlementInfoSubmit = () => {
    setCurrentStep("complete")
  }

  const isEmailValid = formData.email.includes("@") && formData.email.includes(".")
  const isPasswordValid = formData.password.length >= 8
  const doPasswordsMatch = formData.password === formData.confirmPassword
  const isStoreInfoValid = formData.storeName && formData.storeAddress && formData.storePhoto
  const isSettlementInfoValid =
    formData.accountName &&
    formData.accountHolder &&
    formData.accountNumber &&
    formData.taxEmail &&
    formData.businessRegistration

  const handleBackClick = () => {
    switch (currentStep) {
      case "email":
        navigate("/signup")
        break
      case "password":
        setCurrentStep("email")
        break
      case "phone":
        setCurrentStep("password")
        break
      case "store":
        setCurrentStep("phone")
        break
      case "settlement":
        setCurrentStep("store")
        break
      case "complete":
        setCurrentStep("settlement")
        break
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case "email":
        return (
          <div className="space-y-6">
            <h1 className="text-[22px] font-bold">이메일 입력</h1>
            <p className="text-[15px] text-gray-600">원활한 서비스 이용을 위해 이메일 인증을 해주세요</p>
            <div className="space-y-6">
              <InputField label="이름" name="name" value={formData.name} onChange={handleChange} placeholder="홍길동" />
              <div className="space-y-2">
                <InputField
                  label="EMAIL"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="gildong123@gmail.com"
                  actionButton={
                    <Button
                      variant="secondary"
                      fullWidth={false}
                      className="px-4 h-[38px] text-[14px] rounded-lg"
                      disabled={!isEmailValid || isEmailVerified}
                      onClick={handleEmailVerification}
                    >
                      {isEmailVerified ? "인증완료" : "인증요청"}
                    </Button>
                  }
                />
                {isEmailVerificationSent && !isEmailVerified && (
                  <p className="text-sm text-blue-600">이메일로 전송된 인증 코드를 입력해주세요.</p>
                )}
                {isEmailVerified && <p className="text-sm text-green-600">인증되었습니다!</p>}
              </div>
            </div>
            {isEmailVerificationSent && (
              <div className="mt-4">
                <InputField
                  label="인증번호"
                  name="emailVerificationCode"
                  value={formData.emailVerificationCode}
                  onChange={handleChange}
                  placeholder="인증번호 6자리 입력"
                  actionButton={
                    <Button
                      variant="secondary"
                      fullWidth={false}
                      className="px-4 h-[32px] text-sm rounded-lg"
                      onClick={handleEmailVerificationSubmit}
                      disabled={formData.emailVerificationCode.length !== 6}
                    >
                      확인
                    </Button>
                  }
                />
              </div>
            )}
          </div>
        )
      case "password":
        return (
          <div className="space-y-6">
            <h1 className="text-[22px] font-bold">비밀번호 설정</h1>
            <p className="text-[15px] text-gray-600">안전한 비밀번호를 입력해주세요</p>
            <PasswordStep formData={formData} onChange={handleChange} />
          </div>
        )
      case "phone":
        return (
          <div className="pt-8">
            <h1 className="text-[22px] font-bold mb-2">전화번호 입력</h1>
            <p className="text-[15px] text-gray-600 mb-8">원활한 서비스 이용을 위해 전화번호를 입력해주세요</p>
            <PhoneStep
              formData={{
                phone: formData.phone,
                verificationCode: formData.phoneVerificationCode,
              }}
              onChange={handleChange}
              onPhoneVerification={handlePhoneVerification}
              onVerificationSubmit={handlePhoneVerificationSubmit}
              isVerificationSent={isPhoneVerificationSent}
              isVerified={isPhoneVerified}
            />
          </div>
        )
      case "store":
        return (
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            <h1 className="text-[22px] font-bold">가게 정보</h1>
            <p className="text-[15px] text-gray-600">입력하신 내용은 언제든지 변경 가능해요.</p>
            <StoreInfoStep formData={formData} onChange={handleChange} />
          </div>
        )
      case "settlement":
        return (
          <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-150px)]">
            <h1 className="text-[22px] font-bold">정산 정보</h1>
            <p className="text-[15px] text-gray-600">모든 항목이 입력되어야, 정산금이 이체됩니다.</p>
            <SettlementInfoStep
              formData={{
                accountName: formData.accountName,
                accountHolder: formData.accountHolder,
                accountNumber: formData.accountNumber,
                taxEmail: formData.taxEmail,
                businessRegistration: formData.businessRegistration,
              }}
              onChange={handleChange}
              onSubmit={handleSettlementInfoSubmit}
            />
          </div>
        )
      case "complete":
        return <SignupCompleteStep isOwner />
    }
  }

  return (
    <div className="w-full max-w-[430px] mx-auto min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 h-[52px] flex items-center border-b border-gray-100 bg-white max-w-[430px] mx-auto">
        <button onClick={handleBackClick} className="p-3 text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </header>

      {/* Content */}
      <main ref={mainRef} className="flex-1 overflow-y-auto h-[calc(100vh-52px)] pt-[52px] pb-[80px] px-5">
        <div className="py-6">{renderStep()}</div>
      </main>

      {/* Bottom Button */}
      {currentStep !== "complete" && (
        <div className="fixed bottom-0 left-0 right-0 px-5 py-4 bg-white border-t border-gray-100 max-w-[430px] mx-auto">
          <Button
            onClick={
              currentStep === "email"
                ? () => setCurrentStep("password")
                : currentStep === "password"
                  ? handlePasswordSubmit
                  : currentStep === "phone"
                    ? handlePhoneVerificationSubmit
                    : handleStoreInfoSubmit
            }
            disabled={
              currentStep === "email"
                ? !isEmailVerified || !formData.name || !isEmailValid
                : currentStep === "password"
                  ? !isPasswordValid || !doPasswordsMatch
                  : currentStep === "phone"
                    ? !formData.phone  // 전화번호가 입력되면 버튼 활성화
                    : !isStoreInfoValid
            }
          >
            {currentStep === "settlement" ? "가입 완료" : "다음"}
          </Button>
        </div>
      )}
    </div>
  )
}

