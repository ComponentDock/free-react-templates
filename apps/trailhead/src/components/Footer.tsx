import { useState, type FormEvent } from 'react'
import { BrandIcon } from './BrandIcon'
import {
  aboutHeading,
  aboutText,
  connectHeading,
  footerCopyright,
  footerCredit,
  imgUrl,
  quickMenuHeading,
  quickMenuLeft,
  quickMenuRight,
  socialLabels,
  socialLinks,
  subscribeConfirmation,
  subscribeHeading,
  subscribeLabel,
  subscribePlaceholder,
  subscribeText,
} from '../data'

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-footer">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-12">
        {/* About Us */}
        <div className="md:col-span-4">
          <h3 className="text-base font-bold text-white">{aboutHeading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-footer-text">{aboutText}</p>
        </div>

        {/* Quick Menu — two link columns */}
        <div className="md:col-span-3 md:ml-auto">
          <h3 className="text-base font-bold text-white">{quickMenuHeading}</h3>
          <div className="mt-4 flex gap-10">
            <ul className="space-y-2.5">
              {quickMenuLeft.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {quickMenuRight.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="text-sm text-footer-link transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="md:col-span-4">
          <h3 className="text-base font-bold text-white">{subscribeHeading}</h3>
          <p className="mt-4 text-sm leading-relaxed text-footer-text">{subscribeText}</p>
          <form className="mt-4 flex" onSubmit={handleSubscribe}>
            <label htmlFor="trailhead-subscribe-email" className="sr-only">
              {subscribePlaceholder}
            </label>
            <input
              id="trailhead-subscribe-email"
              type="email"
              required
              placeholder={subscribePlaceholder}
              className="min-w-0 flex-1 border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              {subscribeLabel}
            </button>
          </form>
          {subscribed ? (
            <p role="status" className="mt-3 text-sm font-medium text-primary">
              {subscribeConfirmation}
            </p>
          ) : null}
        </div>
      </div>

      {/* Connect With Us + copyright bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 md:flex-row">
          <div>
            <h3 className="text-base font-bold text-white">{connectHeading}</h3>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map((name) => (
                <a
                  key={name}
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-meta"
                >
                  <BrandIcon name={name} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          <img
            src={imgUrl('trailhead-footer', 300, 120)}
            alt=""
            className="hidden rounded object-cover md:block"
          />
          <div className="text-right">
            <p className="text-sm text-footer-text">{footerCopyright(year)}</p>
            <p className="mt-1 text-sm text-footer-text">{footerCredit}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
