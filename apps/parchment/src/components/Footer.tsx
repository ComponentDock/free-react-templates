import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import {
  copyrightDivider,
  copyrightText,
  footerAboutHeading,
  footerAboutParagraphs,
  footerCredit,
  newsletterBlurb,
  newsletterEmailLabel,
  newsletterEmailPlaceholder,
  newsletterHeading,
  newsletterSendLabel,
  newsletterSuccess,
  socialLabels,
  type SocialName,
} from '../data'
import { SocialIcon } from './SocialIcon'

export const footerSocials: SocialName[] = [
  'facebook',
  'twitter',
  'instagram',
  'pinterest',
  'google',
]

/* Deep navy footer — no background of its own, the #111860 page background
   shows through (reference `footer.s-footer` on the navy `body`): About
   column, newsletter subscribe form with a black Send button, social icons,
   and a copyright bar with an original attribution. */
export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="px-4 pt-16 pb-16 text-white/50 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[1170px]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <section aria-label={footerAboutHeading}>
            <h4 className="relative mb-10 pb-6 text-sm font-bold tracking-[.25rem] text-white uppercase">
              {footerAboutHeading}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-[120px] bg-white/10"
              />
            </h4>
            {footerAboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-[1.5rem] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>

          <section aria-label={newsletterHeading}>
            <h4 className="relative mb-10 pb-6 text-sm font-bold tracking-[.25rem] text-white uppercase">
              {newsletterHeading}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-px w-[120px] bg-white/10"
              />
            </h4>
            <p className="mb-8 text-[1.5rem] leading-relaxed">{newsletterBlurb}</p>
            {subscribed ? (
              <p role="status" className="text-base text-white">
                {newsletterSuccess}
              </p>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubscribed(true)
                }}
                className="relative"
              >
                <Mail
                  className="absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  required
                  aria-label={newsletterEmailLabel}
                  placeholder={newsletterEmailPlaceholder}
                  className="h-[5.4rem] w-full rounded-[3px] border-none bg-black/25 pr-32 pl-14 font-body text-base text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-white/30"
                />
                <Button
                  type="submit"
                  className="absolute top-0 right-0 h-[5.4rem] rounded-[3px] bg-black px-6 text-white hover:bg-black/80"
                >
                  {newsletterSendLabel}
                </Button>
              </form>
            )}
          </section>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-[1.4rem]">
            <span>{copyrightText}</span>
            <span aria-hidden="true" className="mx-3 text-white/10">
              {copyrightDivider}
            </span>
            <span>{footerCredit}</span>
          </p>
          <ul className="flex items-center gap-6">
            {footerSocials.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={socialLabels[name]}
                  className="text-white transition-colors hover:text-white/70"
                >
                  <SocialIcon name={name} className="h-7 w-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
