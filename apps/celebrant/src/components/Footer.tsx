import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { Heart } from 'lucide-react'
import { isEmail } from '../lib/forms'
import {
  COMPONENT_DOCK_LABEL,
  COMPONENT_DOCK_URL,
  COPYRIGHT_BY,
  COPYRIGHT_MIDDLE,
  COPYRIGHT_PREFIX,
  FOOTER_ABOUT_BODY,
  FOOTER_ABOUT_TITLE,
  FOOTER_LINKS,
  FOOTER_LINKS_TITLE,
  FOLLOW_TITLE,
  NEWSLETTER_ERROR,
  NEWSLETTER_FIELD_LABEL,
  NEWSLETTER_FORM_LABEL,
  NEWSLETTER_OK,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_SEND,
  NEWSLETTER_TITLE,
  SECTION_IDS,
  SOCIALS,
} from '../lib/site'
import {
  dockLinkClass,
  footerAboutColumnClass,
  footerAboutInnerClass,
  footerAboutTextClass,
  footerBodyClass,
  footerClass,
  footerCopyClass,
  footerHairlineClass,
  footerHeadingClass,
  footerHeartClass,
  footerInnerClass,
  footerNewsColumnClass,
  footerQuickColumnClass,
  footerRowClass,
  newsletterFieldRowClass,
  newsletterInputClass,
  newsletterLabelClass,
  newsletterStatusClass,
  quickLinkClass,
  quickLinkItemClass,
  quickLinksClass,
  sendClass,
  socialGlyphClass,
  socialLinkClass,
  socialRowClass,
} from '../lib/styles'

/**
 * The dark foot of the page: the practice's paragraph beside the four section rows, the newsletter
 * field with its mint pill, the four brand marks, and a centred copyright line whose year the
 * design writes at runtime and whose credit belongs to Component Dock.
 */
export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(isEmail(email) ? 'ok' : 'error')
  }

  const message = status === 'ok' ? NEWSLETTER_OK : status === 'error' ? NEWSLETTER_ERROR : ''

  return (
    <footer className={footerClass}>
      <div className={footerInnerClass}>
        <div className={footerRowClass}>
          <div className={footerAboutColumnClass}>
            <div className={footerAboutInnerClass}>
              <div className={footerAboutTextClass}>
                <h2 className={footerHeadingClass}>{FOOTER_ABOUT_TITLE}</h2>
                <p className={footerBodyClass}>{FOOTER_ABOUT_BODY}</p>
              </div>

              <div className={footerQuickColumnClass}>
                <h2 className={footerHeadingClass}>{FOOTER_LINKS_TITLE}</h2>
                <nav aria-label={FOOTER_LINKS_TITLE}>
                  <ul className={quickLinksClass}>
                    {FOOTER_LINKS.map((item) => (
                      <li key={item.label} className={quickLinkItemClass}>
                        <a href={item.href} className={quickLinkClass}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className={footerNewsColumnClass}>
            <div id={SECTION_IDS.contact} className="mb-[24px]">
              <h2 className={footerHeadingClass}>{NEWSLETTER_TITLE}</h2>
              <form className="m-0" aria-label={NEWSLETTER_FORM_LABEL} noValidate onSubmit={handleSubmit}>
                <div className={newsletterFieldRowClass}>
                  <label htmlFor="celebrant-email" className={newsletterLabelClass}>
                    {NEWSLETTER_FIELD_LABEL}
                  </label>
                  <input
                    id="celebrant-email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder={NEWSLETTER_PLACEHOLDER}
                    className={newsletterInputClass}
                    onChange={handleChange}
                  />
                  <Button type="submit" className={sendClass}>
                    {NEWSLETTER_SEND}
                  </Button>
                </div>
              </form>
              <p role="status" className={newsletterStatusClass}>
                {message}
              </p>
            </div>

            <div>
              <h2 className={footerHeadingClass}>{FOLLOW_TITLE}</h2>
              <ul className={socialRowClass}>
                {SOCIALS.map((social) => (
                  <li key={social.name}>
                    <a
                      href={COMPONENT_DOCK_URL}
                      className={socialLinkClass}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        className={socialGlyphClass}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={footerHairlineClass}>
          <p data-testid="copyright" className={footerCopyClass}>
            {COPYRIGHT_PREFIX} {new Date().getFullYear()} {COPYRIGHT_MIDDLE}{' '}
            <Heart className={footerHeartClass} aria-hidden="true" /> {COPYRIGHT_BY}{' '}
            <a
              href={COMPONENT_DOCK_URL}
              className={dockLinkClass}
              target="_blank"
              rel="noreferrer"
            >
              {COMPONENT_DOCK_LABEL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
