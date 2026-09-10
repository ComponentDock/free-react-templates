import { ChevronRight, ChevronLeft } from 'lucide-react'

interface NavButtonsProps {
  step: number
  totalSteps: number
  onPrev: () => void
  onNext: () => void
  onSubmit: () => void
}

export function NavButtons({ step, totalSteps, onPrev, onNext, onSubmit }: NavButtonsProps) {
  const isLastStep = step === totalSteps - 1

  return (
    <div className="mt-8 flex justify-between">
      {step > 0 ? (
        <button
          type="button"
          onClick={onPrev}
          className="flex h-12 cursor-pointer items-center gap-2 rounded bg-white px-6 text-sm font-medium text-text-primary shadow-sm transition-colors hover:bg-gray-100"
        >
          <ChevronLeft size={16} />
          Back
        </button>
      ) : (
        <div />
      )}

      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          className="flex h-12 cursor-pointer items-center gap-2 rounded bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Confirm
          <ChevronRight size={16} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex h-12 cursor-pointer items-center gap-2 rounded bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Next
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  )
}
