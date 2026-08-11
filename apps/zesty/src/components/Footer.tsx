import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  copyrightText,
  emailInvalidMessage,
  footerBlurb,
  siteName,
  socialLinks,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeEmailPlaceholder,
  subscribeHeading,
  subscribeSuccess,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Light-gray footer (reference `footer.footer-section`, background
   #EAEDF2, 70px top padding): brand + blurb, a newsletter subscribe form
   with a white-bordered input and solid pink button (validates, then
   swaps to a success message), five text-labelled social links, and the
   original ColorLib copyright line. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(emailInvalidMessage)
      return
    }
    setError(null)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer pt-[70px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-[30px] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#" className="text-[28px] font-bold tracking-wide text-ink uppercase">
              {siteName}
            </a>
            <p className="mt-5 max-w-[380px] text-ink/70">{footerBlurb}</p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="mb-5 text-[22px] font-bold text-ink">{subscribeHeading}</h3>
            {subscribed ? (
              <p role="status" className="mb-[38px] text-[16px] font-bold text-ink">
                {subscribeSuccess}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mb-[38px]">
                <div className="flex flex-col gap-[15px] sm:flex-row">
                  <input
                    type="email"
                    aria-label={subscribeEmailLabel}
                    placeholder={subscribeEmailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-16 flex-1 border border-white bg-transparent pl-[34px] pr-4 text-[16px] text-ink italic outline-none placeholder:text-ink/40 focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="min-w-[205px] border border-brand bg-brand px-10 py-[17px] text-[18px] font-bold text-white transition-colors hover:bg-brand/90"
                  >
                    {subscribeButtonLabel}
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-[14px] font-bold text-brand">
                    {error}
                  </p>
                )}
              </form>
            )}

            <div className="flex flex-wrap">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="mb-[15px] mr-[35px] inline-flex items-center gap-2 text-[15px] font-bold text-ink transition-colors hover:text-brand"
                >
                  <SocialIcon name={link.name} className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="py-[50px] text-[14px] text-copyright">
          {copyrightText(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  )
}
