import { FormField } from './FormField'

export function ConfirmStep() {
  return (
    <div>
      <span className="absolute right-0 top-0 font-button text-[13px] uppercase font-extrabold text-accent">
        Step 4 / 4
      </span>
      <FormField id="confirm_password" label="Confirm your password" type="password" showToggle />
    </div>
  )
}
