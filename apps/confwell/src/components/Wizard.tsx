import { StepIndicator } from './StepIndicator'
import { StepEventInfo } from './StepEventInfo'
import { StepSetEvent } from './StepSetEvent'
import { StepRequest } from './StepRequest'
import { NavigationButtons } from './NavigationButtons'
import { SocialLinks } from './SocialLinks'

interface WizardProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function Wizard({ currentStep, onStepChange }: WizardProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      {/* Left panel — event image */}
      <div
        className="hidden min-h-[45vh] w-full bg-cover bg-center md:block md:min-h-full md:w-[65.78%]"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/confwell-event/1200/900')`,
        }}
      />
      <div className="block min-h-[45vh] w-full md:hidden">
        <img
          src="https://picsum.photos/seed/confwell-event/1200/900"
          alt="Event venue"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right panel — dark form area */}
      <div
        className="relative flex w-full flex-col justify-center px-[4.3%] py-10 md:w-[34.22%] md:py-0"
        style={{
          backgroundImage: `url('https://picsum.photos/seed/confwell-dark/600/900')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative z-10 mx-auto w-full md:w-auto">
          <StepIndicator currentStep={currentStep} />

          <div className="min-h-[400px]">
            {currentStep === 1 && <StepEventInfo />}
            {currentStep === 2 && <StepSetEvent />}
            {currentStep === 3 && <StepRequest />}
          </div>

          <NavigationButtons
            currentStep={currentStep}
            totalSteps={3}
            onPrevious={() => onStepChange(currentStep - 1)}
            onNext={() => onStepChange(currentStep + 1)}
          />
        </div>

        <SocialLinks />
      </div>
    </div>
  )
}
