import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  copyright,
  credit,
  followUsNames,
  followUsTagline,
  followUsTitle,
  footerAboutBlurb,
  footerAboutTitle,
  footerInstagramCount,
  footerInstagramTitle,
  footerNewsletterLabel,
  footerNewsletterPlaceholder,
  footerNewsletterTagline,
  footerNewsletterTitle,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  const preventSubmit = (event: FormEvent) => event.preventDefault()

  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h2 className="font-serif text-lg font-semibold text-white">{footerAboutTitle}</h2>
          <p className="mt-5 leading-relaxed">{footerAboutBlurb}</p>
        </div>
        <div className="lg:col-span-4">
          <h2 className="font-serif text-lg font-semibold text-white">{footerNewsletterTitle}</h2>
          <p className="mt-5 text-sm">{footerNewsletterTagline}</p>
          <form onSubmit={preventSubmit} className="mt-5 flex">
            <input
              type="email"
              placeholder={footerNewsletterPlaceholder}
              aria-label={footerNewsletterPlaceholder}
              className="min-w-0 flex-1 border-0 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label={footerNewsletterLabel}
              className="flex items-center justify-center bg-white px-3 text-ink transition-opacity hover:opacity-80"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-serif text-lg font-semibold text-white">{footerInstagramTitle}</h2>
          <ul className="mt-5 grid grid-cols-3 gap-2">
            {Array.from({ length: footerInstagramCount }, (_, index) => (
              <li key={index}>
                <img
                  src={`https://picsum.photos/seed/rekindle-feed-${index + 1}/200/200`}
                  alt={`Instagram feed image ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-serif text-lg font-semibold text-white">{followUsTitle}</h2>
          <p className="mt-5 text-sm">{followUsTagline}</p>
          <SocialIcons names={followUsNames} className="mt-5 text-white/70" />
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/40">
        {copyright} | {credit}
      </div>
    </footer>
  )
}
