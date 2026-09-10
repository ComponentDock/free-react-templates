import { cn } from '@free-react-templates/ui'

interface StepIndicatorProps {
  totalSteps: number
  currentStep: number
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  return (
    <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Wizard steps">
      {Array.from({ length: totalSteps }, (_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === currentStep}
          aria-label={`Step ${i + 1}`}
          className={cn(
            'h-2.5 rounded-full transition-all duration-300',
            i === currentStep ? 'w-6 bg-white' : 'w-2.5 bg-white/50',
          )}
        />
      ))}
    </div>
  )
}
