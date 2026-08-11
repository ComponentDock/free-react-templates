import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  aboutLinkLabel,
  aboutText,
  aboutTitle,
  copyright,
  followTagline,
  followTitle,
  footerCredit,
  footerEmailPlaceholder,
  footerNewsletterTagline,
  footerNewsletterTitle,
  footerSubscribeLabel,
  instagramTileLabel,
  instagramTitle,
  siteName,
  subscribeSuccess,
} from '../data'
import { SocialIcons } from './SocialIcons'

const instagramSeeds = [
  'serif-insta-1',
  'serif-insta-2',
  'serif-insta-3',
  'serif-insta-4',
  'serif-insta-5',
  'serif-insta-6',
]

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="bg-black text-[#797979]">
      {/* footer-area — four columns. */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-[70px] sm:px-8 md:grid-cols-12">
        {/* About Us. */}
        <div className="md:col-span-3">
          <a href="#" className="font-serif text-2xl font-bold text-white">
            {siteName}
          </a>
          <h3 className="mt-4 text-lg font-semibold text-white">{aboutTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed">{aboutText}</p>
          <a
            href="#"
            className="mt-4 inline-block text-sm font-semibold text-brand transition-colors hover:text-white"
          >
            {aboutLinkLabel}
          </a>
        </div>

        {/* Newsletter — input in #191919 + orange arrow click-btn. */}
        <div className="md:col-span-4">
          <h3 className="text-lg font-semibold text-white">{footerNewsletterTitle}</h3>
          <p className="mt-3 text-sm">{footerNewsletterTagline}</p>
          {subscribed ? (
            <p className="mt-4 font-semibold text-brand">{subscribeSuccess}</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 flex">
              <label htmlFor="serif-footer-email" className="sr-only">
                {footerEmailPlaceholder}
              </label>
              <input
                id="serif-footer-email"
                type="email"
                required
                placeholder={footerEmailPlaceholder}
                className="w-[80%] rounded-none bg-footer-input px-5 py-2.5 text-sm text-tag outline-none placeholder:text-[#555555] focus:border focus:border-brand"
              />
              <button
                type="submit"
                aria-label={footerSubscribeLabel}
                className="flex items-center justify-center bg-brand px-3 py-2.5 text-[#222222] transition-colors hover:bg-white"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        {/* Instagram Feed — six thumbs. */}
        <div className="md:col-span-3">
          <h3 className="text-lg font-semibold text-white">{instagramTitle}</h3>
          <ul className="mt-4 grid grid-cols-3 gap-2">
            {instagramSeeds.map((seed, index) => (
              <li key={seed}>
                <img
                  src={`https://picsum.photos/seed/${seed}/100/100`}
                  alt={instagramTileLabel(index)}
                  className="h-[72px] w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us. */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-white">{followTitle}</h3>
          <p className="mt-3 text-sm">{followTagline}</p>
          <SocialIcons className="mt-4 text-[#555555]" />
        </div>
      </div>

      {/* footer-bottom — copyright bar with the repo-standard credit. */}
      <div className="border-t border-white/10 py-6 text-center">
        <p className="text-sm">{copyright}</p>
        <p className="mt-1 text-sm">{footerCredit}</p>
      </div>
    </footer>
  )
}
