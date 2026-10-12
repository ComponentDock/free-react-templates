import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  GUEST_OPTIONS,
  RSVP_CONFIRMED,
  RSVP_FIELDS,
  RSVP_INVALID,
  RSVP_SUBMIT,
  RSVP_SUBHEADING,
  RSVP_TITLE,
  SECTION_IDS,
  photo,
} from '../lib/site'
import { isValidRsvp } from '../lib/validate'
import {
  rsvpBodyClass,
  rsvpClass,
  rsvpFieldClass,
  rsvpFormClass,
  rsvpGroupClass,
  rsvpHeadClass,
  rsvpLabelClass,
  rsvpPhotoClass,
  rsvpSelectClass,
  rsvpSelectIconClass,
  rsvpSelectWrapClass,
  rsvpStatusClass,
  rsvpSubmitClass,
  rsvpTextareaClass,
  rsvpTitleClass,
  rsvpWashClass,
  subheadingClass,
} from '../lib/styles'

interface RsvpValues {
  name: string
  email: string
  guest: string
  message: string
}

const INITIAL: RsvpValues = { name: '', email: '', guest: GUEST_OPTIONS[0], message: '' }

/**
 * The invitation band: a fixed photograph under the design's white wash, the 60px script question in
 * the left column and the underline-only reply form beneath it. The form is `noValidate` so the
 * page's own name-and-address check decides whether the reply is complete — nothing is ever posted
 * anywhere, and the confirmation is local.
 */
export function RsvpForm() {
  const [values, setValues] = useState<RsvpValues>(INITIAL)
  const [confirmed, setConfirmed] = useState(false)
  const [invalid, setInvalid] = useState(false)

  const update =
    (field: keyof RsvpValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const complete = isValidRsvp(values.name, values.email)

    setConfirmed(complete)
    setInvalid(!complete)
  }

  return (
    <section id={SECTION_IDS.rsvp} className={rsvpClass} aria-label="Invitation">
      <div
        data-testid="rsvp-photo"
        className={rsvpPhotoClass}
        style={{ backgroundImage: `url(${photo('affiance-38', 1920, 1200)})` }}
      />
      <div className={rsvpWashClass} aria-hidden="true" />
      <div className={rsvpBodyClass}>
        <div className={rsvpHeadClass}>
          <span className={subheadingClass}>{RSVP_SUBHEADING}</span>
          <h2 className={rsvpTitleClass}>{RSVP_TITLE}</h2>
        </div>
        <form className={rsvpFormClass} noValidate data-testid="rsvp-form" onSubmit={handleSubmit}>
          <div className={rsvpGroupClass}>
            <label className={rsvpLabelClass} htmlFor="rsvp-name">
              {RSVP_FIELDS.name}
            </label>
            <input
              id="rsvp-name"
              name="name"
              type="text"
              className={rsvpFieldClass}
              placeholder={RSVP_FIELDS.name}
              value={values.name}
              onChange={update('name')}
            />
          </div>
          <div className={rsvpGroupClass}>
            <label className={rsvpLabelClass} htmlFor="rsvp-email">
              {RSVP_FIELDS.email}
            </label>
            <input
              id="rsvp-email"
              name="email"
              type="text"
              className={rsvpFieldClass}
              placeholder={RSVP_FIELDS.email}
              value={values.email}
              onChange={update('email')}
            />
          </div>
          <div className={rsvpGroupClass}>
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
              <ChevronDown className={rsvpSelectIconClass} aria-hidden="true" />
            </div>
          </div>
          <div className={rsvpGroupClass}>
            <label className={rsvpLabelClass} htmlFor="rsvp-message">
              {RSVP_FIELDS.message}
            </label>
            <textarea
              id="rsvp-message"
              name="message"
              rows={2}
              className={rsvpTextareaClass}
              placeholder={RSVP_FIELDS.message}
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
          {invalid ? (
            <p role="status" className={rsvpStatusClass}>
              {RSVP_INVALID}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
