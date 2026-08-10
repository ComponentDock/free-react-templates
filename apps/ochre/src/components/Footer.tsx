import { ArrowRight, Heart } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'
import {
  aboutHeading,
  aboutText,
  brandName,
  contactAddress,
  contactEmail,
  contactHeading,
  contactPhone,
  creditBrand,
  creditPrefix,
  importantLinks,
  linksHeading,
  newsletterHeading,
  newsletterLabel,
  newsletterText,
} from '../data'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Pinterest', name: 'pinterest' },
]

function WidgetHeading({ children }: { children: string }) {
  return (
    <h4 className="relative mb-5 font-display text-lg font-semibold text-ink after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-8 after:bg-brand dark:text-white">
      {children}
    </h4>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-soft dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <WidgetHeading>{aboutHeading}</WidgetHeading>
          <p className="text-sm leading-relaxed text-body dark:text-gray-400">{aboutText}</p>
        </div>

        <div>
          <WidgetHeading>{contactHeading}</WidgetHeading>
          <ul className="space-y-2 text-sm text-body dark:text-gray-400">
            <li>{contactAddress}</li>
            <li>{contactPhone}</li>
            <li>{contactEmail}</li>
          </ul>
        </div>

        <div>
          <WidgetHeading>{linksHeading}</WidgetHeading>
          <ul className="space-y-2 text-sm">
            {importantLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  className="text-body transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WidgetHeading>{newsletterHeading}</WidgetHeading>
          <p className="text-sm leading-relaxed text-body dark:text-gray-400">{newsletterText}</p>
          <form className="mt-4 flex">
            <input
              type="email"
              required
              aria-label={newsletterLabel}
              placeholder="Your Email Address"
              className="w-full border border-line bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              aria-label="Join newsletter"
              className="inline-flex w-12 items-center justify-center bg-brand text-white transition-colors hover:bg-ink"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-line py-7 dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row lg:px-6">
          <p className="text-center text-sm text-body dark:text-gray-400">
            Copyright © {year} {brandName}. {creditPrefix}{' '}
            <Heart className="inline h-3 w-3 fill-brand text-brand" aria-hidden="true" /> by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-brand"
            >
              {creditBrand}
            </a>
          </p>
          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className="text-body transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
