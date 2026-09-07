import type { WizardData } from '../App'
import { FormField } from './FormField'
import { SelectField } from './SelectField'
import { RadioGroup } from './RadioGroup'

interface StepTwoProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string | boolean) => void
}

export function StepTwo({ data, errors, onUpdate }: StepTwoProps) {
  return (
    <div>
      <FormField
        label="Date of Birth:"
        name="dateOfBirth"
        type="date"
        value={data.dateOfBirth}
        error={!!errors.dateOfBirth}
        onChange={(v) => onUpdate('dateOfBirth', v)}
      />
      <SelectField
        label="Country of Birth:"
        name="countryOfBirth"
        value={data.countryOfBirth}
        error={!!errors.countryOfBirth}
        onChange={(v) => onUpdate('countryOfBirth', v)}
        options={[
          { value: '', label: 'Select' },
          { value: 'united states', label: 'United States' },
          { value: 'united kingdom', label: 'United Kingdom' },
          { value: 'viet nam', label: 'Viet Nam' },
        ]}
      />
      <FormField
        label="Your Email:"
        name="email"
        type="email"
        value={data.email}
        error={!!errors.email}
        onChange={(v) => onUpdate('email', v)}
      />
      <FormField
        label="Phone Number:"
        name="phoneNumber"
        type="tel"
        value={data.phoneNumber}
        error={!!errors.phoneNumber}
        onChange={(v) => onUpdate('phoneNumber', v)}
      />
      <RadioGroup
        label="Gender:"
        name="gender"
        value={data.gender}
        error={!!errors.gender}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'transgender', label: 'Transgender' },
        ]}
        onChange={(v) => onUpdate('gender', v)}
      />
    </div>
  )
}
