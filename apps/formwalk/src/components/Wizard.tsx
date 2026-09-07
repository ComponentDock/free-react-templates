import { StepIndicator } from './StepIndicator'
import { StepPersonal } from './StepPersonal'
import { StepAccount } from './StepAccount'
import { StepDetails } from './StepDetails'
import { NavigationButtons } from './NavigationButtons'

interface WizardProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function Wizard({ currentStep, onStepChange }: WizardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0px_8px_20px_0px_rgba(0,0,0,0.15)]">
      {/* Header */}
      <div className="bg-brand px-[80px] py-5 text-center">
        <h3 className="text-[28px] font-bold uppercase text-white">Form Wizard</h3>
      </div>

      {/* Step indicator */}
      <div className="px-[80px] pt-8">
        <StepIndicator currentStep={currentStep} />
      </div>

      {/* Form content */}
      <div className="px-[80px] pb-4">
        {currentStep === 1 && <StepPersonal />}
        {currentStep === 2 && <StepAccount />}
        {currentStep === 3 && <StepDetails />}
      </div>

      {/* Navigation */}
      <div className="px-[80px] pb-[60px] pt-4">
        <NavigationButtons
          currentStep={currentStep}
          totalSteps={3}
          onPrevious={() => onStepChange(currentStep - 1)}
          onNext={() => onStepChange(currentStep + 1)}
        />
      </div>
    </div>
  )
}
