import { ChevronDown } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'
import {
  GUEST_COUNTS,
  RSVP_CONFIRMED,
  RSVP_CTA,
  RSVP_FIELDS,
  RSVP_HEADING,
  RSVP_INVALID,
  RSVP_PLACEHOLDERS,
  SECTION_IDS,
} from '../lib/site'
import {
  containerClass,
  fieldClass,
  fieldLabelClass,
  fieldRowClass,
  rsvpBandClass,
  rsvpCardClass,
  rsvpCornerClass,
  rsvpHeadingClass,
  rsvpOuterClass,
  rsvpSprigClass,
  rsvpSubmitClass,
  selectClass,
  selectGlyphClass,
  selectWrapClass,
  statusClass,
  textareaClass,
} from '../lib/styles'
import { isValidReply } from '../lib/validate'
import { LeafBranch } from './LeafBranch'
import { Sprig } from './Sprig'

/** The four sprigs pinned inside the card, one per corner, mirrored as they turn. */
const CORNERS = [
  'top-[20px] left-[25px]',
  'top-[20px] right-[25px] scale-x-[-1]',
  'bottom-[20px] left-[25px] scale-y-[-1]',
  'bottom-[20px] right-[25px] scale-[-1]',
]

type Status = 'idle' | 'confirmed' | 'invalid'

/**
 * The guest book: a white card lifted off the page with a very soft shadow, four sprigs pinned
 * inside its corners and two leaf branches hanging outside it. The form posts nowhere — the reply is
 * checked here and confirmed in place.
 */
export function RsvpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState<string>(GUEST_COUNTS[0])
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(isValidReply(name, email) ? 'confirmed' : 'invalid')
  }

  return (
    <section id={SECTION_IDS.guestBook} className={rsvpBandClass} aria-label={RSVP_HEADING}>
      <div className={containerClass}>
        <div className="relative">
          <span className={cn(rsvpOuterClass, 'top-[-62px] left-[-143px] h-[493px] w-[499px]')} data-testid="rsvp-outer-top">
            <LeafBranch className="h-full w-full" />
          </span>
          <span className={cn(rsvpOuterClass, 'right-[-133px] bottom-[2px] h-[555px] w-[432px]')} data-testid="rsvp-outer-bottom">
            <LeafBranch className="h-full w-full scale-x-[-1]" />
          </span>

          <div className={rsvpCardClass}>
            {CORNERS.map((corner) => (
              <span key={corner} className={cn(rsvpCornerClass, corner)} data-testid="rsvp-corner">
                <Sprig className="h-full w-full" />
              </span>
            ))}

            <Sprig className={rsvpSprigClass} />
            <h2 className={rsvpHeadingClass}>{RSVP_HEADING}</h2>

            <form noValidate data-testid="reply-form" onSubmit={handleSubmit}>
              <div className={fieldRowClass}>
                <label className={fieldLabelClass} htmlFor="reply-name">
                  {RSVP_FIELDS.name}
                </label>
                <input
                  id="reply-name"
                  name="name"
                  type="text"
                  className={fieldClass}
                  placeholder={RSVP_PLACEHOLDERS.name}
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>

              <div className={fieldRowClass}>
                <label className={fieldLabelClass} htmlFor="reply-email">
                  {RSVP_FIELDS.email}
                </label>
                <input
                  id="reply-email"
                  name="email"
                  type="email"
                  className={fieldClass}
                  placeholder={RSVP_PLACEHOLDERS.email}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                  }}
                />
              </div>

              <div className={fieldRowClass}>
                <label className={fieldLabelClass} htmlFor="reply-guests">
                  {RSVP_FIELDS.guests}
                </label>
                <div className={selectWrapClass}>
                  <select
                    id="reply-guests"
                    name="guests"
                    className={selectClass}
                    value={guests}
                    onChange={(event) => {
                      setGuests(event.target.value)
                    }}
                  >
                    {GUEST_COUNTS.map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className={selectGlyphClass} aria-hidden="true" />
                </div>
              </div>

              <div className={fieldRowClass}>
                <label className={fieldLabelClass} htmlFor="reply-note">
                  {RSVP_FIELDS.message}
                </label>
                <textarea
                  id="reply-note"
                  name="note"
                  className={textareaClass}
                  placeholder={RSVP_PLACEHOLDERS.message}
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value)
                  }}
                />
              </div>

              <Button type="submit" className={rsvpSubmitClass}>
                <span className="relative z-[1]">{RSVP_CTA}</span>
              </Button>

              {status === 'idle' ? null : (
                <p role="status" className={statusClass}>
                  {status === 'confirmed' ? RSVP_CONFIRMED : RSVP_INVALID}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
