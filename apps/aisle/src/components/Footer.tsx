import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  COPYRIGHT_BY,
  COPYRIGHT_MIDDLE,
  COPYRIGHT_PREFIX,
  FOOTER_LINKS,
  FOOTER_NEWS_BODY,
  FOOTER_NEWS_TITLE,
  NEWSLETTER_ERROR,
  NEWSLETTER_FIELD_LABEL,
  NEWSLETTER_FORM_LABEL,
  NEWSLETTER_OK,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SUBMIT_LABEL,
  SECTION_IDS,
  SOCIALS,
} from '../lib/site'
import { isEmail } from '../lib/forms'
import {
  containerClass,
  copyrightClass,
  dockLinkClass,
  footerClass,
  footerInnerClass,
  footerLinkClass,
  footerLinksClass,
  footerWordmarkClass,
  lightboxGlyphClass,
  newsletterBodyClass,
  newsletterFormClass,
  newsletterInputClass,
  newsletterLabelClass,
  newsletterStatusClass,
  newsletterSubmitClass,
  newsletterTitleClass,
  patternClass,
  socialItemClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'
import { SocialIcon } from './SocialIcon'

type Status = 'idle' | 'ok' | 'error'

const FIELD_ID = 'aisle-email'
const STATUS_ID = 'aisle-email-status'

/**
 * The design's patterned footer: the dark script wordmark, the newsletter block whose pill field
 * takes a deeper shadow on focus and whose 55px circular submit inverts to black, five social
 * marks, five tracked links, and the copyright line — whose year is written live and whose credit
 * points at Component Dock instead of the reference's own house.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const year = new Date().getFullYear()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(isEmail(email) ? 'ok' : 'error')
  }

  return (
    <footer id={SECTION_IDS.rsvp} className={footerClass}>
      <span className={patternClass} aria-hidden="true" />
      <div className={containerClass}>
        <div className={footerInnerClass}>
          <p className={footerWordmarkClass}>{BRAND}</p>

          <h4 className={newsletterTitleClass}>{FOOTER_NEWS_TITLE}</h4>
          <p className={newsletterBodyClass}>{FOOTER_NEWS_BODY}</p>

          <form className={newsletterFormClass} aria-label={NEWSLETTER_FORM_LABEL} onSubmit={handleSubmit} noValidate>
            <label className={newsletterLabelClass} htmlFor={FIELD_ID}>
              {NEWSLETTER_FIELD_LABEL}
            </label>
            <input
              id={FIELD_ID}
              className={newsletterInputClass}
              type="email"
              placeholder={NEWSLETTER_PLACEHOLDER}
              value={email}
              aria-invalid={status === 'error'}
              aria-describedby={status === 'error' ? STATUS_ID : undefined}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <Button type="submit" className={newsletterSubmitClass} aria-label={NEWSLETTER_SUBMIT_LABEL}>
              <Send className={lightboxGlyphClass} aria-hidden="true" />
            </Button>
          </form>

          {status === 'ok' ? (
            <p id={STATUS_ID} role="status" className={newsletterStatusClass}>
              {NEWSLETTER_OK}
            </p>
          ) : null}
          {status === 'error' ? (
            <p id={STATUS_ID} role="status" className={newsletterStatusClass}>
              {NEWSLETTER_ERROR}
            </p>
          ) : null}

          <ul className={socialRowClass}>
            {SOCIALS.map((social) => (
              <li key={social.name} className={socialItemClass}>
                <a className={socialLinkClass} href={`#${SECTION_IDS.rsvp}`} aria-label={social.label}>
                  <SocialIcon path={social.path} />
                </a>
              </li>
            ))}
          </ul>

          <ul className={footerLinksClass}>
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a className={footerLinkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p className={copyrightClass}>
            {`${COPYRIGHT_PREFIX} ${year} ${COPYRIGHT_MIDDLE} `}
            <a className={dockLinkClass} href={COMPONENT_DOCK_URL}>
              {COMPONENT_DOCK_LABEL}
            </a>
            {` ${COPYRIGHT_BY} ${BRAND}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
