import { cn } from '@free-react-templates/ui'

interface NavigationActionsProps {
  currentStep: number
  onNext: () => void
  onPrevious: () => void
}

export function NavigationActions({ currentStep, onNext, onPrevious }: NavigationActionsProps) {
  return (
    <div className="mt-8 flex justify-between">
      {currentStep > 1 ? (
        <button
          onClick={onPrevious}
          className={cn(
            'rounded-lg px-6 py-3 font-medium text-heading transition-colors',
            'border border-[#999] bg-transparent hover:bg-gray-100',
          )}
        >
          Previous
        </button>
      ) : (
        <div />
      )}
      {currentStep < 4 ? (
        <button
          onClick={onNext}
          className={cn(
            'rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-90',
            'bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]',
          )}
        >
          Next
        </button>
      ) : (
        <button
          onClick={onNext}
          className={cn(
            'rounded-lg px-6 py-3 font-medium text-white transition-opacity hover:opacity-90',
            'bg-[linear-gradient(136deg,#f27121,#e94057,#8a2387)]',
          )}
        >
          Submit
        </button>
      )}
    </div>
  )
}
