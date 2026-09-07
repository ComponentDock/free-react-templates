import { FormField } from './FormField'

export function NameStep() {
  return (
    <div>
      <span className="absolute right-0 top-0 font-button text-[13px] uppercase font-extrabold text-accent">
        Step 1 / 4
      </span>
      <FormField id="your_name" label="Your Name" />
    </div>
  )
}
