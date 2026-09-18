import { footer, socialLinks, siteName } from '../data'
import { FacebookIcon, GoogleIcon, InstagramIcon, TwitterIcon } from './icons'

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  google: GoogleIcon,
  instagram: InstagramIcon,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink pt-16 text-sm text-white/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2">
        <div>
          <p>
            Copyright © {year} {siteName}. All rights reserved.
          </p>
          <p className="mt-2">
            Made with{' '}
            <a
              href={footer.componentDockHref}
              className="font-medium text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {footer.componentDockLabel}
            </a>
          </p>
        </div>
        <div className="flex justify-end gap-3">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
