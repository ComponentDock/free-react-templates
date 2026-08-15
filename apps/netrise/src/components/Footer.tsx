import { Mail, MapPin, Phone } from 'lucide-react'
import { navigationalLinks, officeInfo, usefulLinks } from '../data'

function FacebookIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <title>{label}</title>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3h2.5v7h2.5Z" />
    </svg>
  )
}

function TwitterIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <title>{label}</title>
      <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-4.9-6.4L6.4 21H3.3l7.3-8.3L2.8 3h6.4l4.4 5.9L18.9 3Zm-1.1 16.1h1.7L7.8 4.7H6L17.8 19.1Z" />
    </svg>
  )
}

function InstagramIcon({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <title>{label}</title>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.4-.4.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.3-.3.8-.4 1.8-.1 1.3-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.4 1.8.2.4.4.8.7 1.1.3.3.6.5 1.1.7.3.2.8.3 1.8.4 1.3.1 1.6.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.4.4-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.3.3-.8.4-1.8.1-1.3.1-1.6.1-4.8.1s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.4-1.8-.2-.4-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.8-.3-1.8-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 8.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

const socials = [
  { label: 'Netrise on Twitter', Icon: TwitterIcon },
  { label: 'Netrise on Facebook', Icon: FacebookIcon },
  { label: 'Netrise on Instagram', Icon: InstagramIcon },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-24 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Netrise</h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="mt-8 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <Icon label={label} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">
            Useful Links
          </h3>
          <ul className="mt-6 space-y-3">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a
                  href="#contact"
                  className="text-sm font-light text-white/70 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">
            Navigational
          </h3>
          <ul className="mt-6 space-y-3">
            {navigationalLinks.map((link) => (
              <li key={link}>
                <a
                  href="#home"
                  className="text-sm font-light text-white/70 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold uppercase tracking-wide text-white">Office</h3>
          <ul className="mt-6 space-y-4 text-sm font-light text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {officeInfo.address}
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {officeInfo.phone}
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {officeInfo.email}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row">
          <p className="text-sm font-light text-white/70">
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with
            ♥
          </p>
          <p className="text-sm font-light text-white/70">
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-sky hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
