import type { WizardData } from '../App'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'

interface WizardStepProps {
  step: number
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string | boolean) => void
}

export function WizardStep({ step, data, errors, onUpdate }: WizardStepProps) {
  if (step === 0) return <StepOne data={data} errors={errors} onUpdate={onUpdate} />
  if (step === 1) return <StepTwo data={data} errors={errors} onUpdate={onUpdate} />
  return <StepThree data={data} errors={errors} onUpdate={onUpdate} />
}
