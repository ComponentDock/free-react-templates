import { useState } from 'react'
import { ChefHat } from 'lucide-react'
import {
  copyrightText,
  emailPattern,
  footerBlurb,
  siteName,
  socialLinks,
  subscribeButtonLabel,
  subscribeEmailLabel,
  subscribeEmailPlaceholder,
  subscribeError,
  subscribeHeading,
  subscribeSuccess,
} from '../data'
import { SocialIcon } from './SocialIcon'

/* Footer (reference `footer.footer-section`, bg #EAEDF2, 70px top padding):
   serif-italic wordmark + grey about blurb left; "Subscribe to our
   newsletter" heading with an email input (placeholder "Your e-mail") and a
   pink pill submit button right (invalid email shows an inline error, valid
   swaps the form for a success message); social icons; copyright bar
   "© <year> All rights reserved | Made with ♥ by Umami". */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError(true)
      return
    }
    setError(false)
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer pt-[70px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2">
              <ChefHat className="h-7 w-7 text-brand" aria-hidden="true" />
              <span className="font-logo text-[26px] font-bold text-ink italic">{siteName}</span>
            </a>
            <p className="mt-[34px] mb-[31px] max-w-md text-blurb">{footerBlurb}</p>
          </div>

          <div className="lg:col-span-7">
            {subscribed ? (
              <p role="status" className="pt-[25px] font-bold text-ink">
                {subscribeSuccess}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="pt-[25px]">
                <h3 className="mb-5 font-bold text-ink">{subscribeHeading}</h3>
                <div className="flex flex-wrap items-stretch gap-[15px]">
                  <input
                    type="email"
                    aria-label={subscribeEmailLabel}
                    placeholder={subscribeEmailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-16 flex-1 basis-[240px] border border-white bg-paper pl-[34px] text-[16px] text-ink italic outline-none placeholder:text-ink/50 focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="min-w-[205px] cursor-pointer rounded-full border border-brand bg-brand px-[70px] py-[17px] text-[14px] font-bold tracking-[1.5px] text-white uppercase transition-colors hover:bg-brand/90"
                  >
                    {subscribeButtonLabel}
                  </button>
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-sm font-bold text-brand">
                    {subscribeError}
                  </p>
                )}
              </form>
            )}

            <div className="mt-[38px] flex flex-wrap gap-x-4 gap-y-[15px]">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-copyright transition-colors hover:text-brand"
                >
                  <SocialIcon name={link.name} className="h-7 w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-[50px] pb-2 text-[14px] text-copyright">
          {copyrightText(new Date().getFullYear())}
        </p>
      </div>
    </footer>
  )
}
