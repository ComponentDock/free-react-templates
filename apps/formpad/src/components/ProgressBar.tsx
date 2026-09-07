import { Check } from 'lucide-react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="relative mx-auto mt-[69px] h-[12px] w-[60%] rounded-[6px] bg-white/30">
      <div
        className="absolute left-0 top-0 h-full rounded-[6px] bg-white/80 transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
      <Check
        className="absolute bottom-[-20px] text-[20px] text-white transition-all duration-500 ease-in-out"
        style={{ left: `${progress - 4}%` }}
        size={20}
      />
    </div>
  )
}
