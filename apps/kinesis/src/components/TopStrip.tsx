import { Phone } from 'lucide-react'
import { phoneDisplay, phoneHref, socials } from '../data'

/* Absolute strip floating over the hero: red "Free Call" label, phone
   number and three skewed social tiles, pushed to the right edge. Hidden
   on small screens (the navbar becomes solid there). */
export function TopStrip() {
  return (
    <div className="absolute inset-x-0 top-2.5 z-30 hidden justify-end px-5 md:flex lg:px-10">
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold text-primary">Free Call</span>
        <a
          href={phoneHref}
          className="flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-primary"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {phoneDisplay}
        </a>
        <ul className="flex items-center" aria-label="Social media">
          {socials.map((social) => (
            <li key={social.name} className="ml-1.5">
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-6 w-6 items-center justify-center bg-primary text-white transition-colors [transform:skew(-25deg)] hover:bg-blue"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 [transform:skew(25deg)]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
