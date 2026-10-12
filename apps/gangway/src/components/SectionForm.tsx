import { useState } from 'react'
import type { FormEvent } from 'react'
import type { FormField, FormModel } from '../lib/site'

/** The heading each of the page's two forms carries. */
const HEADING: Record<FormModel['kind'], string> = {
  billet: 'Add a billet to the board',
  account: 'Open an account',
}

/** What each form answers once it has been sent. */
const CONFIRMATION: Record<FormModel['kind'], string> = {
  billet: 'Billet received — the board is read every morning.',
  account: 'Welcome aboard — the office will confirm your account.',
}

export interface SectionFormProps {
  /** The section the form belongs to, so its controls get ids of their own. */
  id: string
  form: FormModel
}

/**
 * One of the page's two forms, built from its own field list: every control is tied to
 * its label, and the free-text field is the only one that renders as a textarea. Sending
 * it answers in place — there is no server behind this page — and the answer is held back
 * until the form has actually been sent, so nothing claims to have been received before
 * it was.
 */
export function SectionForm({ id, form }: SectionFormProps) {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form
      data-testid={`${id}-form`}
      aria-labelledby={`${id}-form-heading`}
      onSubmit={handleSubmit}
      className="mt-8 max-w-[720px] rounded-btn border border-black/10 p-6"
    >
      <h3 id={`${id}-form-heading`} className="text-[20px] font-semibold text-ink">
        {HEADING[form.kind]}
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {form.fields.map((field) => (
          <FormFieldRow key={field.name} id={id} field={field} />
        ))}
      </div>

      <p className="mt-5 text-[14px] text-ink-soft">{form.note}</p>

      <button
        type="submit"
        className="mt-5 cursor-pointer rounded-btn border border-brand bg-brand px-5 py-2 text-[16px] font-semibold text-white transition-colors duration-150 hover:border-brand-hover hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {form.submitLabel}
      </button>

      {sent && (
        <p
          role="status"
          data-testid={`${id}-form-status`}
          className="mt-5 border-l-2 border-brand bg-flyout-wash px-4 py-3 text-[15px] text-ink"
        >
          {CONFIRMATION[form.kind]}
        </p>
      )}
    </form>
  )
}

interface FormFieldRowProps {
  id: string
  field: FormField
}

/** One field: a label, and the control its own type asks for. */
function FormFieldRow({ id, field }: FormFieldRowProps) {
  const controlId = `${id}-${field.name}`
  const labelClass = 'text-[14px] font-semibold text-ink'

  if (field.type === 'textarea') {
    return (
      <div className="flex flex-col gap-1 sm:col-span-2">
        <label htmlFor={controlId} className={labelClass}>
          {field.label}
        </label>
        <textarea
          id={controlId}
          name={field.name}
          placeholder={field.placeholder}
          rows={4}
          className="rounded-btn border border-black/15 px-3 py-2 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={controlId} className={labelClass}>
        {field.label}
      </label>
      <input
        id={controlId}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        className="rounded-btn border border-black/15 px-3 py-2 text-[15px] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      />
    </div>
  )
}
