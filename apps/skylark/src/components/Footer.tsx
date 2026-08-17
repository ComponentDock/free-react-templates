import { Plane } from 'lucide-react'
import { BRAND, FOOTER, SOCIALS } from '../data'
import { FacebookIcon, SkypeIcon, TwitterIcon, YoutubeIcon } from './icons'

const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, YoutubeIcon, SkypeIcon]

/* Footer — dark centered footer: brand, about blurb, social circles, inline
   nav links, and the Component Dock attribution line (required for every
   template in this repo). */
export function Footer() {
  return (
    <footer className="bg-night py-16 text-center text-white" id="footer">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <p className="flex items-center justify-center gap-2 text-2xl font-extrabold">
          <span className="flex h-9 w-9 items-center justify-center bg-brand text-white">
            <Plane className="h-5 w-5" aria-hidden="true" />
          </span>
          {BRAND}
        </p>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/60">{FOOTER.about}</p>

        <div className="mt-8 flex items-center justify-center gap-3">
          {SOCIALS.map((social, index) => {
            const Icon = SOCIAL_ICONS[index]!
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white/10 text-xl text-white/70 transition-all hover:bg-brand hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>

        <nav aria-label="Footer navigation" className="mt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {FOOTER.nav.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-8 text-sm text-white/50">
          © {new Date().getFullYear()} {BRAND} · {FOOTER.copyright} · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-bold text-white underline-offset-2 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
