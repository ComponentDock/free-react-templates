import { useId, useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'
import { BRAND, COMPONENT_DOCK, FOOTER, FOOTER_LINKS } from '../content'
import { isEmail } from '../lib/forms'
import { Container } from './ui'

interface Message {
  readonly tone: 'error' | 'ok'
  readonly text: string
}

/** Brand marks are inline SVG (no brand icons ship with the icon set). */
const SOCIAL_PATHS: readonly string[] = [
  'M3 3l7.2 9.3L3.4 21h2.3l5.7-7.1 5.4 7.1H21l-7.5-9.7L20.6 3h-2.3l-5.2 6.5L8.2 3z',
  'M13.5 21v-7.5H16l.4-3h-2.9V8.7c0-.9.3-1.5 1.6-1.5H16.6V4.5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.6H7v3h2.6V21z',
  'M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zM17.9 7.4a1 1 0 1 1-2.1 0 1 1 0 0 1 2.1 0zM19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-1.9 13.6c0 1.9-1.5 3.4-3.4 3.4H10.3c-1.9 0-3.4-1.5-3.4-3.4v-5.2c0-1.9 1.5-3.4 3.4-3.4h3.4c1.9 0 3.4 1.5 3.4 3.4z',
  'M21.6 8.2a2.6 2.6 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8A27 27 0 0 0 2 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-3.8zM10 15V9l5.2 3z',
]

const HEADING_CLASS =
  'font-display text-[16px] leading-[1.5] font-bold tracking-[1.6px] text-white uppercase'
const LINK_CLASS =
  'text-white/70 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:no-underline'

/**
 * `#333` footer, 4/5/3 columns (the source's empty spacer column is dropped),
 * a validating subscribe form and a copyright line that credits Component Dock
 * instead of the theme's vendor.
 */
export function Footer() {
  const inputId = useId()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<Message | null>(null)
  const [year] = useState(() => new Date().getFullYear())

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isEmail(email)) {
      setMessage({ tone: 'error', text: 'Enter a valid email address, e.g. you@example.com.' })
      return
    }
    setMessage({
      tone: 'ok',
      text: `Thanks — we will email ${email.trim()} when the next block opens.`,
    })
    setEmail('')
  }

  return (
    <footer className="bg-surface-dark py-[3.6rem] text-white/70 lg:py-[7.35rem]">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className={HEADING_CLASS}>{FOOTER.aboutHeading}</h3>
            <p className="mt-5 text-[1.05rem] leading-[1.8]">{FOOTER.about}</p>
            <ul className="mt-8 flex items-center gap-4">
              {FOOTER.social.map((social, index) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block h-[30px] w-[30px] text-white/70 transition-colors hover:text-white"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[30px] w-[30px]"
                    >
                      <path d={SOCIAL_PATHS[index]!} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className={HEADING_CLASS}>{FOOTER.contactHeading}</h3>
            <ul className="mt-5 space-y-2 text-[1.05rem] leading-[1.8]">
              {FOOTER.contact.map((row) => (
                <li key={row.label}>
                  {row.label}:{' '}
                  {row.href ? (
                    <a href={row.href} className={LINK_CLASS}>
                      {row.value}
                    </a>
                  ) : (
                    <span>{row.value}</span>
                  )}
                </li>
              ))}
            </ul>

            <form id="contact-form" onSubmit={subscribe} className="mt-8">
              <h3 className={HEADING_CLASS}>{FOOTER.subscribeHeading}</h3>
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <div className="mt-3 flex max-w-[430px]">
                <input
                  id={inputId}
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={message?.tone === 'error'}
                  className="h-[50px] w-full rounded-l-[4px] border-2 border-body bg-transparent px-4 text-[1.05rem] text-white placeholder:text-white/50"
                />
                <Button
                  type="submit"
                  aria-label="Subscribe to the Brawn newsletter"
                  className="h-[50px] shrink-0 rounded-l-none rounded-r-[4px] bg-action px-4 text-[13px] font-black tracking-[2.6px] text-[#212529] uppercase hover:bg-action-dark"
                >
                  {FOOTER.subscribeHeading}
                </Button>
              </div>
              {message ? (
                <p
                  role={message.tone === 'error' ? 'alert' : 'status'}
                  className={cn(
                    'mt-3 text-[0.95rem]',
                    message.tone === 'error' ? 'text-red-400' : 'text-white',
                  )}
                >
                  {message.text}
                </p>
              ) : null}
            </form>
          </div>

          <div className="md:col-span-3">
            <h3 className={HEADING_CLASS}>{FOOTER.linksHeading}</h3>
            <ul className="mt-5 space-y-2 text-[1.05rem] leading-[1.8]">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} className={LINK_CLASS}>
                      {link.label}
                    </a>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 text-center text-[1.05rem]">
          <p>
            © {year} {BRAND} — built with{' '}
            <a href={COMPONENT_DOCK} className="text-white underline">
              Component Dock
            </a>
            . More templates at Component Dock.
          </p>
        </div>
      </Container>
    </footer>
  )
}
