import { ArrowRight } from 'lucide-react'

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="submit-btn mt-4 flex items-center gap-2 px-8 py-3 font-[family-name:var(--font-family-heading)] text-sm font-semibold uppercase tracking-wider"
    >
      <span>Submit</span>
      <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
    </button>
  )
}
