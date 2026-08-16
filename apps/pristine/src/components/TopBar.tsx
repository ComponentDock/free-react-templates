import { Phone, Clock } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './SocialIcons'

const socialLinks = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'Twitter', icon: TwitterIcon },
] as const

/** Navy utility top bar: call-for-free-estimate + opening hours on the
 *  left, social icon links on the right. Hidden on small viewports in the
 *  original (`d-none d-sm-block`). */
export function TopBar() {
  return (
    <div className="hidden bg-navy text-sm text-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <ul className="flex items-center divide-x divide-white/20">
          <li className="flex items-center gap-2 pr-5">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>
              Call for Free Estimate! We're the Dust Busters:{' '}
              <a href="tel:+17005678990" className="font-medium hover:text-accent">
                700-567-8990
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2 pl-5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            <span>Opening Hour: Monday – Friday : 8am – 4pm</span>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          {socialLinks.map(({ label, icon: Icon }) => (
            <li key={label}>
              <a
                href="#home"
                aria-label={label}
                className="block transition-transform duration-300 hover:rotate-180 hover:text-accent"
              >
                <Icon className="h-4 w-4" label={label} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
