import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  GUEST_OPTIONS,
  RSVP_CONFIRMED,
  RSVP_EMAIL_ERROR,
  RSVP_FIELDS,
  RSVP_NAME_ERROR,
  RSVP_SUBMIT,
  RSVP_TITLE,
  SECTION_IDS,
} from '../lib/site'
import { isEmailValid, isNameValid } from '../lib/validate'
import {
  containerClass,
  rsvpCardClass,
  rsvpErrorClass,
  rsvpFieldClass,
  rsvpFormClass,
  rsvpFrameClass,
  rsvpLabelClass,
  rsvpRowClass,
  rsvpSectionClass,
  rsvpSelectClass,
  rsvpSelectIconClass,
  rsvpSelectWrapClass,
  rsvpStatusClass,
  rsvpSubmitClass,
  rsvpTextareaClass,
  rsvpTitleClass,
} from '../lib/styles'

interface RsvpValues {
  name: string
  email: string
  guest: string
  message: string
}

const INITIAL: RsvpValues = { name: '', email: '', guest: GUEST_OPTIONS[0], message: '' }

/**
 * The reply card: the design's white plate inside the dashed frame, with its four field kinds — name,
 * address, a guest count and a note — and the scarlet pill. Nothing is ever posted anywhere: the
 * source points its form at `#`, and this one validates locally and confirms in a live region. Values
 * are never cleared, so a visitor who mistypes only loses the mistyped field.
 */
export function RsvpForm() {
  const [values, setValues] = useState<RsvpValues>(INITIAL)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  const update =
    (field: keyof RsvpValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameOk = isNameValid(values.name)
    const emailOk = isEmailValid(values.email)

    setNameError(!nameOk)
    setEmailError(!emailOk)
    setConfirmed(nameOk && emailOk)
  }

  return (
    <section id={SECTION_IDS.rsvp} className={rsvpSectionClass} aria-label="Reply to the invitation">
      <div className={containerClass}>
        <div className={rsvpCardClass}>
          <span className={rsvpFrameClass} aria-hidden="true" />
          <h2 className={rsvpTitleClass}>{RSVP_TITLE}</h2>
          <form className={rsvpFormClass} noValidate data-testid="rsvp-form" onSubmit={handleSubmit}>
            <div className={rsvpRowClass}>
              <label className={rsvpLabelClass} htmlFor="rsvp-name">
                {RSVP_FIELDS.name}
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                className={rsvpFieldClass}
                value={values.name}
                onChange={update('name')}
              />
              {nameError ? (
                <span className={rsvpErrorClass} role="alert">
                  {RSVP_NAME_ERROR}
                </span>
              ) : null}
            </div>

            <div className={rsvpRowClass}>
              <label className={rsvpLabelClass} htmlFor="rsvp-email">
                {RSVP_FIELDS.email}
              </label>
              <input
                id="rsvp-email"
                name="email"
                type="text"
                className={rsvpFieldClass}
                value={values.email}
                onChange={update('email')}
              />
              {emailError ? (
                <span className={rsvpErrorClass} role="alert">
                  {RSVP_EMAIL_ERROR}
                </span>
              ) : null}
            </div>

            <div className={rsvpRowClass}>
              <label className={rsvpLabelClass} htmlFor="rsvp-guest">
                {RSVP_FIELDS.guest}
              </label>
              <div className={rsvpSelectWrapClass}>
                <select
                  id="rsvp-guest"
                  name="guest"
                  className={rsvpSelectClass}
                  value={values.guest}
                  onChange={update('guest')}
                >
                  {GUEST_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden="true" className={rsvpSelectIconClass} />
              </div>
            </div>

            <div className={rsvpRowClass}>
              <label className={rsvpLabelClass} htmlFor="rsvp-message">
                {RSVP_FIELDS.message}
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows={3}
                className={rsvpTextareaClass}
                value={values.message}
                onChange={update('message')}
              />
            </div>

            <Button type="submit" className={rsvpSubmitClass}>
              {RSVP_SUBMIT}
            </Button>

            {confirmed ? (
              <p role="status" className={rsvpStatusClass}>
                {RSVP_CONFIRMED}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
