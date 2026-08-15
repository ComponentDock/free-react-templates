import { useState } from 'react'
import {
  componentDockName,
  componentDockUrl,
  copyrightPrefix,
  emailLabel,
  emailPlaceholder,
  instagramImages,
  instagramLinkLabel,
  instagramTitle,
  madeWithPrefix,
  newsletterSuccess,
  newsletterText,
  newsletterTitle,
  quickLinks,
  quickLinksTitle,
  sendLabel,
} from '../data'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  return (
    <footer id="contact-section" className="bg-soft px-6 pb-10 pt-16 md:pt-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-ink">{instagramTitle}</h3>
            <ul className="mt-6 grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <li key={image}>
                  <a
                    href="#contact-section"
                    aria-label={`${instagramLinkLabel} ${index + 1}`}
                    className="block"
                  >
                    <img src={image} alt="" className="w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <nav aria-label={quickLinksTitle}>
              <h3 className="text-base font-semibold text-ink">{quickLinksTitle}</h3>
              <ul className="mt-6 space-y-[10px]">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact-section"
                      className="text-body transition-colors hover:text-sand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className="text-base font-semibold text-ink">{newsletterTitle}</h3>
              <p className="mt-6 leading-[1.7] text-body">{newsletterText}</p>
              {subscribed ? (
                <p role="status" className="mt-6 text-body">
                  {newsletterSuccess}
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 flex">
                  <label htmlFor="trek-newsletter-email" className="sr-only">
                    {emailLabel}
                  </label>
                  <input
                    id="trek-newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={emailPlaceholder}
                    className="h-[55px] w-full border border-transparent bg-white px-4 text-body outline-none placeholder:text-meta focus:border-sand"
                  />
                  <button
                    type="submit"
                    className="h-[55px] shrink-0 bg-sand px-6 text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-ink"
                  >
                    {sendLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="mt-14 border-t border-ink/10 pt-8 text-center">
          <p className="text-sm text-body">
            {copyrightPrefix} | {madeWithPrefix}{' '}
            <a
              href={componentDockUrl}
              className="font-semibold text-ink transition-colors hover:text-sand"
            >
              {componentDockName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
