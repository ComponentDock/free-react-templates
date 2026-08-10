import { BrandIcon } from './BrandIcon'
import { Newsletter } from './Newsletter'
import { copyrightText, creditText, socialLabels, socialLinks } from '../data'

export function Footer() {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Newsletter />
        <div className="mt-12 flex items-center justify-center gap-4">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={socialLabels[name]}
              className="text-gray-500 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <BrandIcon name={name} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line bg-white/60 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-center text-sm text-gray-500 sm:px-6 md:flex-row">
          <p>{copyrightText}</p>
          <p>{creditText}</p>
        </div>
      </div>
    </footer>
  )
}
