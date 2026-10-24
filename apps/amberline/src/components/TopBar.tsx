import { brand, contact, socials } from '../data'
import { SocialIcon } from './SocialIcon'

export function TopBar() {
  return (
    <div className="bg-footer text-[14px]">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3">
        <p className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-brand">Call us:</span>
          <a href="tel:+123445678910" className="text-white/85 hover:text-brand">
            {contact.phone}
          </a>
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-brand">Email us:</span>
            <a href={`mailto:${contact.email}`} className="text-white/85 hover:text-brand">
              {contact.email}
            </a>
          </p>
          <ul className="flex items-center gap-1" aria-label={`${brand} on social media`}>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center bg-white/5 text-deep-amber transition-colors hover:text-brand"
                >
                  <SocialIcon network={social.label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
