import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

interface NavigationBarProps {
  currentStep: number
  onBack: () => void
  onNext: () => void
  onFinish: () => void
}

export function NavigationBar({ currentStep, onBack, onNext, onFinish }: NavigationBarProps) {
  return (
    <div className="mt-8 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={onBack}
          aria-label="Back Step"
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-[var(--color-step-active)] text-white shadow-[0px_3px_10px_rgba(0,0,0,0.15)] transition-colors hover:bg-[var(--color-step-hover)]"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
      ) : (
        <div />
      )}

      {currentStep < 3 ? (
        <button
          type="button"
          onClick={onNext}
          aria-label="Next Step"
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-[var(--color-step-active)] text-white shadow-[0px_3px_10px_rgba(0,0,0,0.15)] transition-colors hover:bg-[var(--color-step-hover)]"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onFinish}
          aria-label="Finish"
          className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-[var(--color-step-active)] text-white shadow-[0px_3px_10px_rgba(0,0,0,0.15)] transition-colors hover:bg-[var(--color-step-hover)]"
        >
          <Check size={20} aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
