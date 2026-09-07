import { FormField } from './FormField'

export function EmailStep() {
  return (
    <div>
      <span className="absolute right-0 top-0 font-button text-[13px] uppercase font-extrabold text-accent">
        Step 2 / 4
      </span>
      <FormField id="email" label="Your Email" />
    </div>
  )
}
