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
    <div className="mt-[39px] flex justify-between">
      {step > 0 ? (
        <button
          type="button"
          onClick={onPrev}
          className="flex h-[54px] w-[136px] cursor-pointer items-center justify-center gap-2 rounded-[27px] bg-white font-bold uppercase tracking-[1.3px] text-text-muted transition-colors duration-300 hover:bg-neutral-200"
        >
          <ChevronLeft size={18} />
          Previous
        </button>
      ) : (
        <div />
      )}

      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          className="flex h-[54px] w-[180px] cursor-pointer items-center justify-center gap-2 rounded-[27px] bg-primary-green font-bold uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:bg-primary-green-hover"
        >
          Submit
          <ChevronRight size={18} />
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex h-[54px] w-[180px] cursor-pointer items-center justify-center gap-2 rounded-[27px] bg-primary-green font-bold uppercase tracking-[1.3px] text-white transition-colors duration-300 hover:bg-primary-green-hover"
        >
          Next
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}
