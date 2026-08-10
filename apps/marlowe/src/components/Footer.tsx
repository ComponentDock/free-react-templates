import type { FormEvent } from 'react'
import { Heart, Mail } from 'lucide-react'
import {
  categories,
  footerLinks,
  footerTags,
  newsletterPlaceholder,
  newsletterTitle,
  siteDescription,
  siteName,
  socialLabels,
  socialLinks,
  subscribeLabel,
} from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const year = new Date().getFullYear()

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer className="bg-night">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-white">
            {siteName}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-meta">{siteDescription}</p>
          <div className="mt-6 flex items-center gap-4">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#"
                aria-label={socialLabels[name]}
                className="text-meta transition-colors hover:text-brand"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 font-display text-sm font-bold tracking-widest text-white uppercase">
            Categories
          </h2>
          <ul>
            {categories.map((category) => (
              <li
                key={category.name}
                className="flex items-center justify-between border-b border-white/10 py-2.5"
              >
                <a href="#" className="text-sm text-meta transition-colors hover:text-brand">
                  {category.name}
                </a>
                <span className="text-sm text-meta">{category.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 font-display text-sm font-bold tracking-widest text-white uppercase">
            Tags
          </h2>
          <ul className="flex flex-wrap gap-2">
            {footerTags.map((tag) => (
              <li key={tag}>
                <a
                  href="#"
                  className="inline-block border border-white/15 px-3 py-1 text-xs text-meta transition-colors hover:border-brand hover:text-brand"
                >
                  {tag}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden">
          <Mail
            aria-hidden="true"
            className="absolute -right-4 -bottom-6 h-40 w-40 rotate-[13deg] text-white/10"
          />
          <h2 className="mb-6 font-display text-sm font-bold tracking-widest text-white uppercase">
            {newsletterTitle}
          </h2>
          <form onSubmit={handleSubscribe} className="relative">
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder={newsletterPlaceholder}
              className="h-10 w-full border border-white/15 bg-transparent px-3 text-sm text-white placeholder-white/40 outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="mt-3 h-12 w-full border-2 border-brand bg-brand px-6 font-display text-sm font-bold tracking-widest text-white uppercase transition-colors hover:bg-transparent hover:text-brand"
            >
              {subscribeLabel}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[#323335]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="flex items-center gap-1 text-xs text-meta">
            Copyright © {year} All rights reserved | This template is made with
            <Heart className="h-3 w-3 fill-brand text-brand" aria-label="love" />
            by ColorLib
          </p>
          <ul className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs text-meta transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
