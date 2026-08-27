import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavButtonsProps {
  step: number
  totalSteps: number
  onPrev: () => void
  onNext: () => void
  onFinish: () => void
}

export function NavButtons({ step, totalSteps, onPrev, onNext, onFinish }: NavButtonsProps) {
  const isLast = step === totalSteps - 1
  const isFirst = step === 0

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirst}
        aria-disabled={isFirst}
        aria-label="Previous"
        className={cn(
          'flex h-[90px] w-[90px] items-center justify-center rounded-full transition-opacity',
          isFirst ? 'cursor-not-allowed bg-line opacity-100' : 'bg-line hover:bg-gray-200',
        )}
      >
        <ChevronLeft size={40} className={isFirst ? 'text-label-dim' : 'text-ink'} />
      </button>
      <button
        type="button"
        onClick={isLast ? onFinish : onNext}
        aria-label={isLast ? 'Finish' : 'Next'}
        className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-sky text-white hover:bg-sky-deep"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}
