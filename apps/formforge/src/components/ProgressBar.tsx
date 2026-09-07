interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="px-[30px] pt-[30px]">
      <div className="relative h-[10px] overflow-hidden rounded-[17.5px] bg-brand-progress-bg">
        <div
          className="absolute inset-y-0 left-0 rounded-[17.5px] bg-brand-green transition-all duration-300"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="mt-2 text-right text-sm text-brand-muted">{percentage}%</p>
    </div>
  )
}
