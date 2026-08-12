import { FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon, YoutubeIcon } from './SocialIcons'

const FOLLOW_LINKS = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Youtube', icon: YoutubeIcon },
  { label: 'Pinterest', icon: PinterestIcon },
] as const

const LINK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
] as const

/* Footer recreated from the source's black three-widget footer: Follow Us
   social links, a Links list, an Address column, and a copyright bar whose
   credit line links Component Dock per repo conventions. */

export function Footer() {
  return (
    <footer className="bg-black pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Follow Us */}
          <div>
            <h3 className="mb-10 text-[22px] font-normal capitalize text-white">Follow Us</h3>
            <ul className="space-y-1">
              {FOLLOW_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href="#follow"
                    aria-label={link.label}
                    className="inline-flex items-center gap-3 text-base leading-[42px] text-white transition-colors hover:text-accent"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-10 text-[22px] font-normal capitalize text-white">Links</h3>
            <ul className="space-y-3">
              {LINK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base capitalize text-white transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="mb-10 text-[22px] font-normal capitalize text-white">Address</h3>
            <address className="space-y-3 not-italic">
              <p className="text-base leading-relaxed text-white">300, A-block, Green lane, USA</p>
              <p className="text-base text-white">support@creative.com</p>
              <p className="text-base text-white">+10 672 367 3789</p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/20 pb-8 pt-6">
          <p className="text-center text-sm text-copyright lg:text-base">
            Copyright &copy;2026 All rights reserved | This template is made with{' '}
            <span aria-hidden="true">&hearts;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-accent transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
