import { Heart, MapPin } from 'lucide-react'
import { FacebookMark, LinkedinMark, PinterestMark, TwitterMark } from './BrandIcons'

const NAVIGATION = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#faq' },
  { label: 'Blog', href: '#instagram' },
  { label: 'Contact', href: '#contact' },
] as const

const SERVICES = [
  { label: 'Blackforest', href: '#events' },
  { label: 'Bodhubon', href: '#events' },
  { label: 'Rongdhonu', href: '#events' },
  { label: 'Meghrong', href: '#events' },
] as const

const SOCIALS = [
  { label: 'Twitter', Mark: TwitterMark },
  { label: 'Facebook', Mark: FacebookMark },
  { label: 'Linkedin', Mark: LinkedinMark },
  { label: 'Pinterest', Mark: PinterestMark },
] as const

const FOOTER_LINK = 'text-foottext transition-colors hover:text-brand'

/* Navy gradient footer: brand blurb and social row, navigation and service
   columns, contact block, and the Component Dock credit line. */
export function Footer() {
  return (
    <footer id="contact" className="gradient-footer pt-[80px] text-foottext lg:pt-[114px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-[40px] pb-[60px] md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-[24px] font-bold text-white">Wanderbug</span>
            </div>
            <p className="mt-5 text-[16px] leading-[1.8]">
              Land behold it created good saw after she&apos;d our set living. Signs midst dominion
              creepeth morning — tours built for lifelong memories.
            </p>
            <ul className="mt-5 flex items-center gap-1">
              {SOCIALS.map(({ label, Mark }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="inline-flex p-[9px] text-[22px] text-white transition-all hover:-translate-y-[5px] hover:text-brand"
                  >
                    <Mark className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[17px] font-bold text-white">Navigation</h4>
            <ul className="mt-5 space-y-[10px]">
              {NAVIGATION.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={FOOTER_LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[17px] font-bold text-white">Services</h4>
            <ul className="mt-5 space-y-[10px]">
              {SERVICES.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={FOOTER_LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[17px] font-bold text-white">Contact Us</h4>
            <ul className="mt-5 space-y-[10px]">
              <li>76/A, Green Lane, Dhanmondi, NYC</li>
              <li>
                <a href="mailto:demomail89@gmail.com" className={FOOTER_LINK}>
                  demomail89@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+10787389083"
                  className="text-[22px] text-brand transition-colors hover:text-white"
                >
                  +10 (78) 738-9083
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-[26px] text-center text-[14px] leading-[2]">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <Heart className="inline h-4 w-4 text-periwinkle" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
