import type { EchoSaveType } from "../../../types/bakery"

interface StatsCardsProps {
  echoSave: EchoSaveType | null
}

export function StatsCards({ echoSave }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md">
        <h3 className="text-base font-bold text-[#333333] mb-4">저감한 CO2e</h3>
        <img src="/src/assets/mdi_cloud-outline.png" alt="저감한 CO2e" />
        <div className="flex items-center justify-center mb-4">
          <span className="text-[#fc973b] text-2xl font-bold">{echoSave?.reduced_co2 || 0}</span>
          <span className="text-[#fc973b] ml-1">kg 감소</span>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md">
        <h3 className="text-base font-bold text-[#333333] mb-4">절약한 금액</h3>
        <img src="/src/assets/tdesign_money.png" alt="절약한 금액" className="m-[7px]"/>
        <div className="flex items-center justify-center mb-4">
          <span className="text-[#fc973b] text-2xl font-bold">{echoSave?.saved_money || 0}</span>
          <span className="text-[#fc973b] ml-1">원</span>
        </div>
      </div>
    </div>
  )
}

