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
    <footer className="bg-dark pt-16 text-sm text-white/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{siteName}</p>
          <p className="mt-4">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {['Church kids', 'Community', 'Ministries', 'Message', 'Sermons', 'Events'].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">Contact Information</h3>
          <ul className="space-y-2">
            <li>198 West 21th Street, Suite 721 New York NY 10016</li>
            <li>+ 1235 2355 98</li>
            <li>info@yoursite.com</li>
          </ul>
        </div>
        <div>
          <div className="flex gap-3">
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
      </div>
      <div className="border-t border-white/10 py-6 text-center">
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
    </footer>
  )
}
