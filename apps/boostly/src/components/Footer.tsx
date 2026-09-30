import { Heart, Star } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const footerNav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const footerServices = [
  { label: 'Blackforest', href: '#services' },
  { label: 'Bodhubon', href: '#services' },
  { label: 'Rongdhonu', href: '#services' },
  { label: 'Meghrong', href: '#services' },
] as const

const socials = [
  { name: 'twitter', label: 'Twitter' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'linkedin', label: 'Linkedin' },
  { name: 'pinterest', label: 'Pinterest' },
] as const

/** Footer: black band with four columns — white Boostly wordmark, blurb
 *  and social icons; Navigation links; Services links; contact address and
 *  phone. Bottom bar: orange heart + Component Dock attribution. */
export function Footer() {
  return (
    <footer id="contact" className="bg-black pt-[114px] font-body">
      <div className="mx-auto grid gap-10 px-4 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 font-heading text-[25px] font-bold text-white">
            <Star className="h-6 w-6 fill-brand text-brand" aria-hidden="true" />
            Boostly
          </span>
          <p className="mt-6 max-w-xs text-base leading-[1.8] text-foot">
            Land behold it created good saw after she&apos;d Our set living. Signs midst dominion
            creepeth morning laboris nisi ufsit aliquip.
          </p>
          <div className="mt-6 flex gap-1">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#contact"
                aria-label={social.label}
                className="inline-flex p-[9px] text-white transition-all hover:-translate-y-[5px] hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-[22px] w-[22px]" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-10 font-body text-[17px] font-bold text-white">Navigation</h3>
          <ul className="space-y-[15px]">
            {footerNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-foot underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-10 font-body text-[17px] font-bold text-white">Services</h3>
          <ul className="space-y-[15px]">
            {footerServices.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-base text-foot underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-10 font-body text-[17px] font-bold text-white">Contact Us</h3>
          <p className="text-base text-foot">76/A, Green Lane, Dhanmondi, NYC</p>
          <a
            href="tel:+10787389083"
            className="mt-4 inline-block text-base text-foot transition-colors hover:text-white"
          >
            +10 (78) 738-9083
          </a>
        </div>
      </div>
      <div className="mx-auto mt-[70px] max-w-7xl border-t border-white/10 px-4 py-[45px] lg:px-8">
        <p className="text-center text-sm leading-loose text-foot">
          {'Copyright \u00A9 ' + new Date().getFullYear()} All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 fill-brand text-brand" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline-offset-4 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
