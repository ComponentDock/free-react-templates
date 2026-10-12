import { useState, type ChangeEvent, type FormEvent } from 'react'
import { CircleAlert } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  FIELD_IDS,
  GUESTS_LABEL,
  GUESTS_OPTIONS,
  MEAL_LABEL,
  MEAL_OPTIONS,
  RESERVATION_EMAIL_ERROR,
  RESERVATION_FIELDS,
  RESERVATION_LEAD,
  RESERVATION_MESSAGE_ERROR,
  RESERVATION_NAME_ERROR,
  RESERVATION_PHOTO,
  RESERVATION_SUBMIT,
  RESERVATION_TITLE,
  SECTION_IDS,
  reservationConfirmed,
  type NiceOption,
} from '../lib/site'
import { focusField, isEmailValid, isMessageValid, isNameValid } from '../lib/validate'
import {
  errorClass,
  errorIconClass,
  fieldClass,
  fieldLabelClass,
  fieldWrapClass,
  reservationFormClass,
  reservationGridClass,
  reservationInnerClass,
  reservationLeadClass,
  reservationPhotoClass,
  reservationSectionClass,
  reservationTitleClass,
  statusClass,
  submitClass,
  textareaClass,
  reservationVeilClass,
} from '../lib/styles'
import { NiceSelect } from './NiceSelect'

/** The field kinds the page checks, so one submit can open every error at once. */
interface FieldErrors {
  name: boolean
  email: boolean
  message: boolean
}

const NO_ERRORS: FieldErrors = { name: false, email: false, message: false }

/**
 * The reservation band: the design's form over its night photograph, with transparent fields, its two
 * picker rows (a meal, a number of guests) and the name, email and note a reply needs. Nothing is
 * ever posted — the design points its own form at an empty `action` with no method — so the page
 * validates here, marks every field that needs attention, puts the visitor in front of the first one
 * and answers in the message slot beneath the button. Values are never cleared.
 */
export function Reservation() {
  const [meal, setMeal] = useState<NiceOption>(MEAL_OPTIONS[0])
  const [guests, setGuests] = useState<NiceOption>(GUESTS_OPTIONS[0])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>(NO_ERRORS)
  const [confirmed, setConfirmed] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameOk = isNameValid(name)
    const emailOk = isEmailValid(email)
    const messageOk = isMessageValid(message)

    setErrors({ name: !nameOk, email: !emailOk, message: !messageOk })

    if (nameOk && emailOk && messageOk) {
      setConfirmed(reservationConfirmed(meal.label, guests.label))
      return
    }

    setConfirmed(null)
    focusField(!nameOk ? FIELD_IDS.name : !emailOk ? FIELD_IDS.email : FIELD_IDS.message)
  }

  return (
    <section id={SECTION_IDS.reservation} className={reservationSectionClass} aria-label="Reserve your seat">
      <div
        className={reservationPhotoClass}
        style={{ backgroundImage: `url(${RESERVATION_PHOTO})` }}
        aria-hidden="true"
      />
      <span className={reservationVeilClass} aria-hidden="true" />

      <div className={reservationInnerClass}>
        <h2 className={reservationTitleClass}>{RESERVATION_TITLE}</h2>
        <p className={reservationLeadClass}>{RESERVATION_LEAD}</p>

        <form className={reservationFormClass} noValidate data-testid="reservation-form" onSubmit={handleSubmit}>
          <div className={reservationGridClass}>
            <NiceSelect
              id="reservation-meal"
              label={MEAL_LABEL}
              options={MEAL_OPTIONS}
              value={meal}
              onChange={setMeal}
            />
            <NiceSelect
              id="reservation-guests"
              label={GUESTS_LABEL}
              options={GUESTS_OPTIONS}
              value={guests}
              onChange={setGuests}
            />
          </div>

          <div className={fieldWrapClass}>
            <label className={fieldLabelClass} htmlFor={FIELD_IDS.name}>
              {RESERVATION_FIELDS.name}
            </label>
            <input
              id={FIELD_IDS.name}
              name="name"
              type="text"
              className={fieldClass}
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value)
              }}
            />
            {errors.name ? (
              <span className={errorClass} role="alert">
                <CircleAlert aria-hidden="true" className={errorIconClass} />
                {RESERVATION_NAME_ERROR}
              </span>
            ) : null}
          </div>

          <div className={fieldWrapClass}>
            <label className={fieldLabelClass} htmlFor={FIELD_IDS.email}>
              {RESERVATION_FIELDS.email}
            </label>
            <input
              id={FIELD_IDS.email}
              name="email"
              type="email"
              className={fieldClass}
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value)
              }}
            />
            {errors.email ? (
              <span className={errorClass} role="alert">
                <CircleAlert aria-hidden="true" className={errorIconClass} />
                {RESERVATION_EMAIL_ERROR}
              </span>
            ) : null}
          </div>

          <div className={fieldWrapClass}>
            <label className={fieldLabelClass} htmlFor={FIELD_IDS.message}>
              {RESERVATION_FIELDS.message}
            </label>
            <textarea
              id={FIELD_IDS.message}
              name="message"
              rows={4}
              className={textareaClass}
              value={message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
                setMessage(event.target.value)
              }}
            />
            {errors.message ? (
              <span className={errorClass} role="alert">
                <CircleAlert aria-hidden="true" className={errorIconClass} />
                {RESERVATION_MESSAGE_ERROR}
              </span>
            ) : null}
          </div>

          <Button type="submit" className={submitClass}>
            {RESERVATION_SUBMIT}
          </Button>

          {confirmed === null ? null : (
            <p role="status" className={statusClass}>
              {confirmed}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
