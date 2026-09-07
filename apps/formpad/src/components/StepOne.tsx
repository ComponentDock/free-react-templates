import type { WizardData } from '../App'
import { FormField } from './FormField'
import { SelectField } from './SelectField'

interface StepOneProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string | boolean) => void
}

export function StepOne({ data, errors, onUpdate }: StepOneProps) {
  return (
    <div>
      <SelectField
        label="Is this course for UF Online?"
        name="ufOnline"
        value={data.ufOnline}
        error={!!errors.ufOnline}
        onChange={(v) => onUpdate('ufOnline', v)}
        options={[
          { value: '', label: 'Select' },
          { value: 'no', label: 'No' },
          { value: 'yes', label: 'Yes' },
        ]}
      />
      <SelectField
        label="Preferred System:"
        name="preferredSystem"
        value={data.preferredSystem}
        error={!!errors.preferredSystem}
        onChange={(v) => onUpdate('preferredSystem', v)}
        options={[
          { value: '', label: 'Select' },
          { value: 'canvas', label: 'Canvas' },
          { value: 'svg', label: 'Svg' },
        ]}
      />
      <SelectField
        label="College / Department:"
        name="collegeDept"
        value={data.collegeDept}
        error={!!errors.collegeDept}
        onChange={(v) => onUpdate('collegeDept', v)}
        options={[
          { value: '', label: 'Select' },
          { value: 'florida', label: 'University of Florida' },
          { value: 'harvard', label: 'University of Harvard' },
          { value: 'oxford', label: 'University of Oxford' },
        ]}
      />
      <SelectField
        label="Term:"
        name="term"
        value={data.term}
        error={!!errors.term}
        onChange={(v) => onUpdate('term', v)}
        options={[
          { value: '', label: 'Select Term' },
          { value: 'term 1', label: 'Term 1' },
          { value: 'term 2', label: 'Term 2' },
          { value: 'term 3', label: 'Term 3' },
        ]}
      />
      <FormField
        label="Instructor Username:"
        name="instructorUsername"
        type="text"
        value={data.instructorUsername}
        error={!!errors.instructorUsername}
        onChange={(v) => onUpdate('instructorUsername', v)}
      />
    </div>
  )
}
