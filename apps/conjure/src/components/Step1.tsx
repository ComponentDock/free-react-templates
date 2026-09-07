import { FormInput } from './FormInput'
import { FormRadio } from './FormRadio'
import { FormCheckbox } from './FormCheckbox'

export function Step1() {
  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: First Name + Last Name */}
      <div className="flex gap-4">
        <FormInput label="First Name" placeholder="First Name" className="flex-1" />
        <FormInput label="Last Name" placeholder="Last Name" className="flex-1" />
      </div>

      {/* Row 2: Email + Phone */}
      <div className="flex gap-4">
        <FormInput label="Your Email" placeholder="Your Email" className="flex-1" />
        <FormInput label="Phone Number" placeholder="Phone Number" className="flex-1" />
      </div>

      {/* Row 3: Age + Gender */}
      <div className="flex items-end gap-4">
        <FormInput label="Age" placeholder="Age" className="flex-1" />
        <FormRadio
          name="gender"
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
          defaultValue="male"
        />
      </div>

      {/* Consent checkbox */}
      <FormCheckbox
        id="consent-1"
        label="Nor again is there anyone who loves or pursues or desires to obtaini."
        defaultChecked={true}
        className="mt-[41px] w-[63%]"
      />
    </div>
  )
}
