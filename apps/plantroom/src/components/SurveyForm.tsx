import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { SURVEY_PROMPTS } from '../data'
import { emailError, requiredError } from '../forms'
import { Toast, useToast } from './Toast'

interface Errors {
  name?: string
  email?: string
}

/**
 * The hero's survey card. The reference binds no handler to this form at all —
 * a submit simply navigates — so the recreation owns the behaviour: required
 * and e-mail checks on submit and on blur, inline messages tied to their input,
 * then a reset and the house toast. Nothing is sent anywhere.
 */
export function SurveyForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [promptValue, setPromptValue] = useState(SURVEY_PROMPTS[0])
  const [errors, setErrors] = useState<Errors>({})
  const { message, notify } = useToast()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: Errors = { name: requiredError(name), email: emailError(email) }
    setErrors(next)

    if (next.name !== undefined || next.email !== undefined) {
      return
    }

    setName('')
    setEmail('')
    setPromptValue(SURVEY_PROMPTS[0])
    notify('Message sent successfully!')
  }

  return (
    <div
      id="quote"
      className="scroll-mt-28 rounded-2xl border border-ink-100 bg-white p-6 shadow-md lg:p-8"
    >
      <h2 className="text-xl font-bold text-ink-800 lg:text-2xl">Request a site survey</h2>
      <p className="mt-2 text-sm text-ink-500">Three fields. We reply the same working day.</p>

      <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="survey-name" className="block text-sm font-semibold text-ink-700">
            Your name
          </label>
          <input
            id="survey-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            placeholder="Sam Whitfield"
            aria-invalid={errors.name !== undefined}
            aria-describedby={errors.name === undefined ? undefined : 'survey-name-error'}
            onChange={(event) => {
              setName(event.target.value)
              setErrors((current) => ({ ...current, name: undefined }))
            }}
            onBlur={() => setErrors((current) => ({ ...current, name: requiredError(name) }))}
            className={cn('field mt-1.5', errors.name !== undefined && 'field-error')}
          />
          {errors.name === undefined ? null : (
            <p id="survey-name-error" className="mt-1.5 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="survey-email" className="block text-sm font-semibold text-ink-700">
            Work email
          </label>
          <input
            id="survey-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            placeholder="sam@company.com"
            aria-invalid={errors.email !== undefined}
            aria-describedby={errors.email === undefined ? undefined : 'survey-email-error'}
            onChange={(event) => {
              setEmail(event.target.value)
              setErrors((current) => ({ ...current, email: undefined }))
            }}
            onBlur={() => setErrors((current) => ({ ...current, email: emailError(email) }))}
            className={cn('field mt-1.5', errors.email !== undefined && 'field-error')}
          />
          {errors.email === undefined ? null : (
            <p id="survey-email-error" className="mt-1.5 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="survey-prompt" className="block text-sm font-semibold text-ink-700">
            What prompted this?
          </label>
          <select
            id="survey-prompt"
            name="prompt"
            value={promptValue}
            onChange={(event) => setPromptValue(event.target.value)}
            className="field mt-1.5"
          >
            {SURVEY_PROMPTS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-primary-700"
        >
          Request the survey
        </button>
      </form>

      <p className="mt-4 text-xs text-ink-400">
        No obligation. You keep the asset condition report either way.
      </p>

      <Toast message={message} />
    </div>
  )
}
