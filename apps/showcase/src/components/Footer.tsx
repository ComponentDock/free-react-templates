import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './BrandIcons'
import { footerBlurb, footerLinks, footerServices, questionsContact } from '../data'

const socials = [
  { name: 'Twitter', href: 'https://twitter.com/', Icon: TwitterIcon },
  { name: 'Facebook', href: 'https://www.facebook.com/', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/', Icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: LinkedInIcon },
] as const

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="mt-4 leading-relaxed text-white/70">{footerBlurb}</p>
            <ul className="mt-6 flex gap-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
                  >
                    <social.Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Links</h2>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((label) => (
                <li key={label}>
                  <a
                    href="#services-section"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Have a Questions?</h2>
            <ul className="mt-4 space-y-2.5 text-white/70">
              <li>{questionsContact.address}</li>
              <li>{questionsContact.phone}</li>
              <li>{questionsContact.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>
            Copyright © {year} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
