import type { WizardData } from '../App'
import { FormField } from './FormField'
import { SelectField } from './SelectField'
import { CheckboxField } from './CheckboxField'

interface StepThreeProps {
  data: WizardData
  errors: Record<string, boolean>
  onUpdate: (field: keyof WizardData, value: string | boolean) => void
}

export function StepThree({ data, errors, onUpdate }: StepThreeProps) {
  return (
    <div>
      <FormField
        label="Course ID:"
        name="courseId"
        type="text"
        value={data.courseId}
        error={!!errors.courseId}
        placeholder="Ex. abc 12345 or abc 1234L"
        onChange={(v) => onUpdate('courseId', v)}
      />
      <FormField
        label="Course Title:"
        name="courseTitle"
        type="text"
        value={data.courseTitle}
        error={!!errors.courseTitle}
        placeholder="Ex. Intro to physic"
        onChange={(v) => onUpdate('courseTitle', v)}
      />
      <FormField
        label="Section(s):"
        name="sections"
        type="text"
        value={data.sections}
        error={!!errors.sections}
        placeholder="Ex. 3679 or 33fa, 4295"
        onChange={(v) => onUpdate('sections', v)}
      />
      <SelectField
        label="Select Teacher:"
        name="selectTeacher"
        value={data.selectTeacher}
        error={!!errors.selectTeacher}
        onChange={(v) => onUpdate('selectTeacher', v)}
        options={[
          { value: '', label: 'Select' },
          { value: 'frances meyer', label: 'Frances Meyer' },
          { value: 'johan lucas', label: 'Johan Lucas' },
          { value: 'merry linn', label: 'Merry Linn' },
        ]}
      />
      <CheckboxField
        name="agreeTerms"
        checked={data.agreeTerms}
        error={!!errors.agreeTerms}
        label="I agree to all statements in Terms & Conditions"
        onChange={(v) => onUpdate('agreeTerms', v)}
      />
    </div>
  )
}
