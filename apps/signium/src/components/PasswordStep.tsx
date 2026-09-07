import { FormField } from './FormField'

export function PasswordStep() {
  return (
    <div>
      <span className="absolute right-0 top-0 font-button text-[13px] uppercase font-extrabold text-accent">
        Step 3 / 4
      </span>
      <FormField id="your_password" label="Your Password" type="password" showToggle />
    </div>
  )
}
