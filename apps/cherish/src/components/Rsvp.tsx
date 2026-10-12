import { useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { TitleBlock } from './title-block'
import {
  RSVP_EMAIL_ERROR,
  RSVP_EMAIL_INVALID_ERROR,
  RSVP_EMAIL_LABEL,
  RSVP_EVENT_LABEL,
  RSVP_EVENT_OPTIONS,
  RSVP_EYEBROW,
  RSVP_GUEST_LABEL,
  RSVP_GUEST_OPTIONS,
  RSVP_HEADING,
  RSVP_NAME_ERROR,
  RSVP_NAME_LABEL,
  RSVP_NOTE,
  RSVP_SIDE_BODY,
  RSVP_SIDE_EYEBROW,
  RSVP_SIDE_HEADING,
  RSVP_SUBMIT,
  RSVP_SUCCESS,
  replyReceived,
} from '../lib/site'
import {
  brandButtonClass,
  containerClass,
  fieldErrorClass,
  rsvpBandClass,
  rsvpCardClass,
  rsvpFieldClass,
  rsvpRowClass,
  rsvpSelectClass,
  rsvpSideClass,
  rsvpSubmitWrapClass,
  sectionAnchorStyle,
  successBodyClass,
  successTitleClass,
} from '../lib/styles'

export interface ReplyValues {
  name: string
  email: string
  guests: string
  event: string
}

export interface ReplyErrors {
  name?: string
  email?: string
}

/** Good enough to catch a typo, deliberately not a full address grammar. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY_REPLY: ReplyValues = { name: '', email: '', guests: '', event: '' }

/** The two fields that have to be filled in, and what to say when they are not. */
export function validateReply(values: ReplyValues): ReplyErrors {
  const errors: ReplyErrors = {}

  if (values.name.trim() === '') errors.name = RSVP_NAME_ERROR
  if (values.email.trim() === '') errors.email = RSVP_EMAIL_ERROR
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = RSVP_EMAIL_INVALID_ERROR

  return errors
}

/** The reply card that floats out of its band on both sides, with the block of copy beside it. */
export function Rsvp() {
  const [values, setValues] = useState<ReplyValues>(EMPTY_REPLY)
  const [errors, setErrors] = useState<ReplyErrors>({})
  const [isSent, setIsSent] = useState(false)

  function update(field: keyof ReplyValues, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => {
      if (field === 'name') return { ...previous, name: undefined }
      if (field === 'email') return { ...previous, email: undefined }
      return previous
    })
  }

  return (
    <section
      id="seat"
      data-testid="seat"
      aria-labelledby="seat-heading"
      className={rsvpBandClass}
      style={sectionAnchorStyle}
    >
      <div className={containerClass}>
        <div className={rsvpRowClass}>
          <div className={rsvpCardClass} data-testid="rsvp-card">
            <TitleBlock
              eyebrow={RSVP_EYEBROW}
              heading={RSVP_HEADING}
              headingId="seat-heading"
              lead={RSVP_NOTE}
              tone="brand"
            />

            {isSent ? (
              <div role="status" data-testid="reply-sent">
                <h3 className={successTitleClass}>{RSVP_SUCCESS}</h3>
                <p className={successBodyClass}>{replyReceived(values.email)}</p>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={(event) => {
                  event.preventDefault()
                  const found = validateReply(values)

                  if (found.name || found.email) {
                    setErrors(found)
                    return
                  }

                  setIsSent(true)
                }}
              >
                <label htmlFor="cherish-name" className="sr-only">
                  {RSVP_NAME_LABEL}
                </label>
                <input
                  id="cherish-name"
                  value={values.name}
                  placeholder={RSVP_NAME_LABEL}
                  onChange={(event) => {
                    update('name', event.target.value)
                  }}
                  className={rsvpFieldClass}
                />
                {errors.name ? <p className={fieldErrorClass}>{errors.name}</p> : null}

                <label htmlFor="cherish-email" className="sr-only">
                  {RSVP_EMAIL_LABEL}
                </label>
                <input
                  id="cherish-email"
                  value={values.email}
                  placeholder={RSVP_EMAIL_LABEL}
                  onChange={(event) => {
                    update('email', event.target.value)
                  }}
                  className={rsvpFieldClass}
                />
                {errors.email ? <p className={fieldErrorClass}>{errors.email}</p> : null}

                <label htmlFor="cherish-guests" className="sr-only">
                  {RSVP_GUEST_LABEL}
                </label>
                <select
                  id="cherish-guests"
                  value={values.guests}
                  onChange={(event) => {
                    update('guests', event.target.value)
                  }}
                  className={rsvpSelectClass}
                >
                  <option value="">{RSVP_GUEST_LABEL}</option>
                  {RSVP_GUEST_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <label htmlFor="cherish-parts" className="sr-only">
                  {RSVP_EVENT_LABEL}
                </label>
                <select
                  id="cherish-parts"
                  value={values.event}
                  onChange={(event) => {
                    update('event', event.target.value)
                  }}
                  className={rsvpSelectClass}
                >
                  <option value="">{RSVP_EVENT_LABEL}</option>
                  {RSVP_EVENT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <div className={rsvpSubmitWrapClass}>
                  <Button type="submit" className={brandButtonClass}>
                    {RSVP_SUBMIT}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className={rsvpSideClass}>
            <TitleBlock
              eyebrow={RSVP_SIDE_EYEBROW}
              heading={RSVP_SIDE_HEADING}
              headingId="seat-side-heading"
              lead={RSVP_SIDE_BODY}
              tone="dark"
              className="text-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
