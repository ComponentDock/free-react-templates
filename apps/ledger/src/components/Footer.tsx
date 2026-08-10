import type { FormEvent } from 'react'
import { ArrowRight, Headphones, Heart, Home } from 'lucide-react'
import { contactRows, footerAbout, newsletterIntro, newsletterPlaceholder } from '../data'

const contactIcons = { home: Home, headphones: Headphones } as const

export function Footer() {
  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <footer className="bg-footer-bg">
      <div className="mx-auto max-w-[1200px] px-4 pt-[100px] pb-[30px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h4 className="mb-6 text-2xl font-bold text-white">About Me</h4>
            <p className="text-[14px] leading-relaxed text-footer-text">{footerAbout}</p>
          </div>
          <div>
            <h4 className="mb-6 text-2xl font-bold text-white">Contact us</h4>
            <ul className="flex flex-col gap-5">
              {contactRows.map((row) => {
                const Icon = contactIcons[row.icon]
                return (
                  <li key={row.heading} className="relative pl-[35px]">
                    <Icon
                      className="absolute top-[5px] left-0 h-[18px] w-[18px] text-brand"
                      aria-hidden="true"
                    />
                    <h5 className="text-base text-white">{row.heading}</h5>
                    <p className="text-[14px] text-footer-text">{row.detail}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-2xl font-bold text-white">Newsletter</h4>
            <p className="text-[14px] text-footer-text">{newsletterIntro}</p>
            <form onSubmit={handleSubscribe} className="mt-6">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={newsletterPlaceholder}
                className="h-12 w-full rounded-none border border-footer-border bg-transparent px-4 text-[13px] text-input-text placeholder:text-input-text focus:border-line focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="mt-6 flex h-12 w-[49px] items-center justify-center bg-brand text-white transition-colors hover:bg-ink"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-[83px] border-t border-footer-top pt-[30px] text-center text-[14px] text-footer-text">
          <p>
            © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <Heart className="inline h-3 w-3 text-brand" fill="currentColor" aria-hidden="true" />{' '}
            by{' '}
            <a href="https://colorlib.com" className="text-brand">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
