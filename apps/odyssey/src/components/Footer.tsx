import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  copyright,
  emailPlaceholder,
  followUsTagline,
  followUsTitle,
  footerAboutBlurb,
  footerAboutTitle,
  footerCredit,
  footerInstagramCount,
  footerInstagramTitle,
  footerNewsletterTagline,
  footerNewsletterTitle,
  instagramImageLabel,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  const preventSubmit = (event: FormEvent) => event.preventDefault()

  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 className="font-serif text-lg font-semibold text-white">{footerAboutTitle}</h2>
          <p className="mt-5 text-sm leading-relaxed">{footerAboutBlurb}</p>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-serif text-lg font-semibold text-white">{footerNewsletterTitle}</h2>
          <p className="mt-5 text-sm">{footerNewsletterTagline}</p>
          <form onSubmit={preventSubmit} className="mt-5 flex">
            <input
              type="email"
              placeholder={emailPlaceholder}
              aria-label={emailPlaceholder}
              className="min-w-0 flex-1 rounded-l-full border border-white/20 bg-transparent px-5 py-2.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex items-center justify-center rounded-r-full bg-brand px-4 text-white transition-opacity hover:opacity-90"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="lg:col-span-4">
          <h2 className="font-serif text-lg font-semibold text-white">{footerInstagramTitle}</h2>
          <ul className="mt-5 grid grid-cols-4 gap-2">
            {Array.from({ length: footerInstagramCount }, (_, index) => (
              <li key={index}>
                <img
                  src={`https://picsum.photos/seed/odyssey-feed-${index + 1}/100/100`}
                  alt={instagramImageLabel(index)}
                  className="aspect-square w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-serif text-lg font-semibold text-white">{followUsTitle}</h2>
          <p className="mt-5 text-sm">{followUsTagline}</p>
          <SocialIcons className="mt-5 text-white/70" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/40">
        {copyright} | {footerCredit}
      </div>
    </footer>
  )
}
