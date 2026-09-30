import { BrandIcon } from './BrandIcon'

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const footerWork = [
  { label: 'Dieter Rams', href: '#work' },
  { label: 'kMix Design', href: '#work' },
] as const

const socials = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'linkedin', label: 'Linkedin' },
  { name: 'youtube', label: 'Youtube' },
] as const

/** Footer: white 4-widget bar (About Us / Navigation / Work / Social)
 *  over a centered copyright line with the Component Dock attribution. */
export function Footer() {
  return (
    <footer id="contact" className="bg-white py-[7rem] font-body text-[14px]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div id="about">
          <h3 className="mb-5 font-heading text-[20px] text-black">About Us</h3>
          <p className="text-black/50">
            Upstart is a small design studio building brands, websites and digital products for
            early-stage teams.
          </p>
        </div>
        <div>
          <h3 className="mb-5 font-heading text-[20px] text-black">Navigation</h3>
          <ul className="space-y-[15px]">
            {footerNav.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-black transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-heading text-[20px] text-black">Work</h3>
          <ul className="space-y-[15px]">
            {footerWork.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-black transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-5 font-heading text-[20px] text-black">Social</h3>
          <ul className="space-y-[15px]">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 text-black transition-colors hover:text-accent"
                >
                  <BrandIcon name={social.name} className="h-4 w-4 text-[#ccc]" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-4 text-center text-black lg:px-8">
        {'Copyright \u00A9 All rights reserved'} | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-bold transition-colors hover:text-accent"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
