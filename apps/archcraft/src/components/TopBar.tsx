import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const socialLinks = [
  { Icon: TwitterIcon, href: '#', label: 'Twitter' },
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
] as const

export function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-white/70 transition-colors hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-white/70">
          <a href="mailto:info@archcraft.com" className="hover:text-white">
            info@archcraft.com
          </a>
          <span className="text-white/30">|</span>
          <a href="tel:+1234567890" className="hover:text-white">
            +1 234 567 890
          </a>
        </div>
      </div>
    </div>
  )
}
