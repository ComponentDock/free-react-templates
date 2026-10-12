import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  BRAND,
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  COPYRIGHT_MIDDLE,
  COPYRIGHT_PREFIX,
  FOOTER_COLUMNS,
  FOOTER_NEWS_BODY,
  FOOTER_NEWS_TITLE,
  LEGAL_LINKS,
  NEWSLETTER_EMAIL_ID,
  NEWSLETTER_ERROR,
  NEWSLETTER_FIELD_LABEL,
  NEWSLETTER_FORM_LABEL,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_STATUS_ID,
  NEWSLETTER_SUBMIT_LABEL,
  NEWSLETTER_SUCCESS,
  SECTION_IDS,
  SOCIALS,
} from '../lib/site'
import { isEmail } from '../lib/forms'
import {
  containerClass,
  copyrightBarClass,
  copyrightClass,
  dockLinkClass,
  footerClass,
  footerColumnListClass,
  footerColumnTitleClass,
  footerColumnsClass,
  footerLineClass,
  footerLinkClass,
  footerSocialClass,
  footerSocialRowClass,
  footerTopClass,
  footerWordmarkClass,
  legalRowClass,
  newsletterBodyClass,
  newsletterFormClass,
  newsletterInputClass,
  newsletterStatusClass,
  newsletterSubmitClass,
  newsletterTitleClass,
  socialGlyphClass,
} from '../lib/styles'
import { SocialIcon } from './SocialIcon'

type Status = 'idle' | 'ok' | 'error'

/**
 * The dark olive close: the newsletter pill and four discs, the four columns the design prints — the
 * wordmark, the opening hours, the mailbox and telephone, the address — and the copyright bar, whose
 * year is read from the clock and whose credit points at Component Dock rather than the reference's
 * own house. The pill is the second form on the page and keeps its own success state, separate from
 * the enquiry card's.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const year = new Date().getFullYear()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(isEmail(email) ? 'ok' : 'error')
  }

  return (
    <footer id={SECTION_IDS.contact} className={footerClass}>
      <div className={containerClass}>
        <div className={footerTopClass}>
          <div>
            <h4 className={newsletterTitleClass}>{FOOTER_NEWS_TITLE}</h4>
            <p className={newsletterBodyClass}>{FOOTER_NEWS_BODY}</p>

            <form
              className={newsletterFormClass}
              aria-label={NEWSLETTER_FORM_LABEL}
              onSubmit={handleSubmit}
              noValidate
            >
              <label className="sr-only" htmlFor={NEWSLETTER_EMAIL_ID}>
                {NEWSLETTER_FIELD_LABEL}
              </label>
              <input
                id={NEWSLETTER_EMAIL_ID}
                className={newsletterInputClass}
                type="email"
                placeholder={NEWSLETTER_PLACEHOLDER}
                value={email}
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? NEWSLETTER_STATUS_ID : undefined}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <Button
                type="submit"
                variant="ghost"
                className={newsletterSubmitClass}
                aria-label={NEWSLETTER_SUBMIT_LABEL}
              >
                <Send className={socialGlyphClass} aria-hidden="true" />
              </Button>
            </form>

            {status === 'idle' ? null : (
              <p id={NEWSLETTER_STATUS_ID} role="status" className={newsletterStatusClass}>
                {status === 'ok' ? NEWSLETTER_SUCCESS : NEWSLETTER_ERROR}
              </p>
            )}
          </div>

          <ul className={footerSocialRowClass}>
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} className={footerSocialClass} aria-label={social.label}>
                  <SocialIcon mark={social.mark} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={footerColumnsClass}>
          <div>
            <p className={footerWordmarkClass}>{BRAND}</p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h5 className={footerColumnTitleClass}>{column.title}</h5>
              <ul className={footerColumnListClass}>
                {column.lines.map((line) => (
                  <li key={line.text} className={footerLineClass}>
                    {line.href ? (
                      <a className={footerLinkClass} href={line.href}>
                        {line.text}
                      </a>
                    ) : (
                      <span>{line.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={copyrightBarClass}>
          <p className={copyrightClass}>
            {`${COPYRIGHT_PREFIX} ${year} ${COPYRIGHT_MIDDLE} `}
            <a className={dockLinkClass} href={COMPONENT_DOCK_URL}>
              {COMPONENT_DOCK_LABEL}
            </a>
          </p>

          <ul className={legalRowClass}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a className={footerLinkClass} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
