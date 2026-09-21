import { Sun, Clock } from 'lucide-react'
import { SOCIAL_LINKS } from '../data'

/* Brand icons — lucide-react removed brand icons, so we use inline SVGs. */

function FacebookIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'facebook':
      return <FacebookIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'youtube':
      return <YoutubeIcon />
    case 'instagram':
      return <InstagramIcon />
    case 'mail':
      return <MailIcon />
    default:
      return null
  }
}

/* TopBar recreated from the source template's ht-options: a thin dark bar
   with weather/date widget on the left and social icons on the right. */

export function TopBar() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="bg-logo-bg border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center gap-4 text-xs text-text-body">
          <span className="flex items-center gap-1">
            <Sun className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span>20°C London</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span>{dateStr}</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="text-text-body transition-colors hover:text-brand"
            >
              <SocialIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
