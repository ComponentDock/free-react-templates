import { type FormEvent, useState } from 'react'
import { Check } from 'lucide-react'
import { FOOTER, FOOTER_LINKS } from '../data'

/* Footer (source: footer.site-footer — black footer with a Subscribe
   column (email input + green "Send Now"), an About Us link column with
   green arrow bullets, an About blurb column, and a centered copyright
   bar above a top border). The attribution line links to Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (email.trim() !== '') {
      setSent(true)
    }
  }

  return (
    <footer id="contact" className="bg-ink py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-4/12">
            <h2 className="mb-3 text-[18px] font-semibold">{FOOTER.subscribeTitle}</h2>
            {sent ? (
              <p className="flex items-center gap-2 text-brand" role="status">
                <Check className="h-4 w-4" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={onSubmit} className="flex">
                <label htmlFor="roost-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="roost-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={FOOTER.subscribePlaceholder}
                  className="mr-3 h-[55px] w-full bg-white px-3 text-[15px] text-ink outline-none placeholder:text-gray-400 focus:border-2 focus:border-brand"
                />
                <button
                  type="submit"
                  className="h-[55px] bg-brand px-5 text-white transition-colors hover:bg-brand-hover"
                >
                  {FOOTER.sendNowLabel}
                </button>
              </form>
            )}
          </div>

          <div className="md:ml-auto md:w-3/12">
            <h2 className="mb-3 text-[18px] font-semibold">{FOOTER.aboutLinksTitle}</h2>
            <ul>
              {FOOTER_LINKS.map((label) => (
                <li key={label} className="flex items-center gap-2 py-1">
                  <span aria-hidden="true" className="text-brand">
                    ›
                  </span>
                  <a
                    href="#contact"
                    className="text-[15px] text-white/80 transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-4/12">
            <h2 className="mb-3 text-[18px] font-semibold">{FOOTER.aboutTitle}</h2>
            <p className="text-[15px] leading-relaxed text-white/70">{FOOTER.aboutBlurb}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-[14px] text-white/60">
            Copyright © {new Date().getFullYear()} All rights reserved ·{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors hover:text-brand"
            >
              {FOOTER.credit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
