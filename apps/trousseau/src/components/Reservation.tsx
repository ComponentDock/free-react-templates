import { Button, cn } from '@free-react-templates/ui'
import { useState, type FormEvent } from 'react'
import {
  GUESTS,
  MEALS,
  RESERVATION_CONFIRMED,
  RESERVATION_CTA,
  RESERVATION_FIELDS,
  RESERVATION_HEADING,
  RESERVATION_INTRO,
  RESERVATION_INVALID,
  SECTION_IDS,
  type Guests,
  type Meal,
} from '../lib/site'
import {
  containerClass,
  fieldClass,
  fieldLabelClass,
  mainButtonClass,
  reservationCardClass,
  reservationSideClass,
  sectionClass,
  selectClass,
  statusClass,
} from '../lib/styles'
import { isValidRsvp } from '../lib/validate'
import { Ornament } from './Ornament'
import { SectionTitle } from './SectionTitle'

/**
 * The reservation card: a white panel that floats on a very soft shadow with a flourish on either
 * side, holding the name and address fields, the two choices, and the square pink button. The card
 * owns its own validation (`noValidate`, then the check below) and never leaves the page.
 */
export function Reservation() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [meal, setMeal] = useState<Meal>(MEALS[0])
  const [guests, setGuests] = useState<Guests>(GUESTS[0])
  const [reply, setReply] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setReply(isValidRsvp(name, email) ? RESERVATION_CONFIRMED : RESERVATION_INVALID)
  }

  return (
    <section id={SECTION_IDS.reservation} className={sectionClass} aria-label="Reservation form">
      <div className={containerClass}>
        <div className="relative mx-auto max-w-[555px]">
          <Ornament className={cn(reservationSideClass, 'top-1/2 -left-[100px] -translate-y-1/2 rotate-90')} />
          <Ornament className={cn(reservationSideClass, 'top-1/2 -right-[100px] -translate-y-1/2 -rotate-90')} />

          <div className={reservationCardClass}>
            <SectionTitle heading={RESERVATION_HEADING} intro={RESERVATION_INTRO} />

            <form className="text-left" noValidate onSubmit={handleSubmit}>
              <div className="mb-[20px]">
                <label htmlFor="rsvp-name" className={fieldLabelClass}>
                  {RESERVATION_FIELDS.name}
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  type="text"
                  className={fieldClass}
                  placeholder="Your full name"
                  value={name}
                  required
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="rsvp-email" className={fieldLabelClass}>
                  {RESERVATION_FIELDS.email}
                </label>
                <input
                  id="rsvp-email"
                  name="email"
                  type="email"
                  className={fieldClass}
                  placeholder="Where we should write back"
                  value={email}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </div>

              <div className="mb-[20px]">
                <label htmlFor="rsvp-meal" className={fieldLabelClass}>
                  {RESERVATION_FIELDS.meal}
                </label>
                <select
                  id="rsvp-meal"
                  name="meal"
                  className={selectClass}
                  value={meal}
                  onChange={(event) => {
                    setMeal(event.target.value as Meal)
                  }}
                >
                  {MEALS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-[30px]">
                <label htmlFor="rsvp-guests" className={fieldLabelClass}>
                  {RESERVATION_FIELDS.guests}
                </label>
                <select
                  id="rsvp-guests"
                  name="guests"
                  className={selectClass}
                  value={guests}
                  onChange={(event) => {
                    setGuests(event.target.value as Guests)
                  }}
                >
                  {GUESTS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <Button type="submit" className={mainButtonClass}>
                {RESERVATION_CTA}
              </Button>

              {reply === '' ? null : (
                <p role="status" className={statusClass}>
                  {reply}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
