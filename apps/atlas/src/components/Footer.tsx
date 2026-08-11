import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  footerCopyright,
  footerMenuHeading,
  footerMenuLinks,
  siteName,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeEmailPlaceholder,
  subscribeHeading,
  subscribeSuccess,
} from '../data'

/* Dark footer (reference `footer.footer-area`, background #161616, 70px
   padding): brand + copyright with the original Colorlib attribution, a
   6-link menu at 33.3% width each, and a subscribe form with an underline
   email input + arrow submit (success state swaps the form). */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-footer py-[70px] text-white">
      <div className="mx-auto grid max-w-[1170px] gap-10 px-4 md:grid-cols-3">
        <section>
          <a
            href="#"
            className="font-heading text-[26px] font-bold tracking-wide text-white uppercase"
          >
            {siteName}
          </a>
          <p className="mt-8 text-sm text-white/60">{footerCopyright(new Date().getFullYear())}</p>
        </section>

        <section aria-label={footerMenuHeading}>
          <ul className="grid grid-cols-3 gap-y-2">
            {footerMenuLinks.map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label={subscribeHeading}>
          <h5 className="mb-5 font-heading text-lg font-bold">{subscribeHeading}</h5>
          {subscribed ? (
            <p role="status" className="text-sm text-white">
              {subscribeSuccess}
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
              className="flex items-center gap-2"
            >
              <input
                type="email"
                required
                aria-label={subscribeEmailLabel}
                placeholder={subscribeEmailPlaceholder}
                className="h-[35px] w-full border-b border-input bg-transparent text-sm text-white outline-none placeholder:text-input focus:border-brand"
              />
              <button
                type="submit"
                aria-label={subscribeButtonLabel}
                className="text-white transition-colors hover:text-white/70"
              >
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          )}
        </section>
      </div>
    </footer>
  )
}
