import { BRAND, FOOTER } from '../data'
import { SOCIAL_ICONS } from './icons'

const SOCIALS = [
  { key: 'facebook' as const, label: 'Facebook' },
  { key: 'twitter' as const, label: 'Twitter' },
  { key: 'instagram' as const, label: 'Instagram' },
]

/* Footer: copyright line, social icon circles, and a "More templates
   at Component Dock" link. */
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 bg-ink px-6 py-16 text-center">
      <p className="text-sm text-white/70">
        &copy; {year} {BRAND} — All rights reserved
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        {SOCIALS.map((social) => {
          const Icon = SOCIAL_ICONS[social.key]
          return (
            <a
              key={social.key}
              href="#"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-brand hover:text-brand"
            >
              <Icon className="h-4 w-4" />
            </a>
          )
        })}
      </div>
      <p className="mt-6 text-sm text-white/70">
        More templates at{' '}
        <a href={FOOTER.siteUrl} className="text-white transition hover:text-brand">
          {FOOTER.siteName}
        </a>
      </p>
    </footer>
  )
}
