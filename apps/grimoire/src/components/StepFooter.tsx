import { ChevronLeft, ChevronRight } from 'lucide-react'

interface StepFooterProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrev: () => void
}

export function StepFooter({ currentStep, totalSteps, onNext, onPrev }: StepFooterProps) {
  const isFirst = currentStep === 0
  const isLast = currentStep === totalSteps - 1

  return (
    <div className="flex items-center justify-between bg-[#f8f8f8] border-t border-[#e0e0e0] px-5 py-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        className="flex items-center gap-1 text-sm text-[#999] hover:text-[#222] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous step"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <span className="text-sm text-[#999]">
        Step {currentStep + 1} of {totalSteps}
      </span>

      <button
        type="button"
        onClick={isLast ? undefined : onNext}
        className="flex items-center gap-1 text-sm bg-[#6DAB3C] text-white px-4 py-2 rounded-[5px] hover:bg-[#5f9434] transition-colors"
        aria-label={isLast ? 'Submit' : 'Next step'}
      >
        {isLast ? 'Submit' : 'Next'}
        {!isLast && <ChevronRight className="w-4 h-4" />}
      </button>
    </div>
  )
}
