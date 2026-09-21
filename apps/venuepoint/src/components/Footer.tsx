import { MapPin, Phone, Mail } from 'lucide-react'

const contactItems: ReadonlyArray<{
  readonly label: string
  readonly value: string
  readonly icon: typeof MapPin
  readonly href?: string
}> = [
  {
    label: 'Address',
    value: '481 Creekside Lane, Avila CA 93424',
    icon: MapPin,
  },
  {
    label: 'Phone',
    value: '+53 345 7953 32453',
    icon: Phone,
    href: 'tel:+53345795332453',
  },
  {
    label: 'Email',
    value: 'yourmail@gmail.com',
    icon: Mail,
    href: 'mailto:yourmail@gmail.com',
  },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {/* Logo + copyright */}
        <div>
          <a href="#home" className="flex flex-col leading-tight">
            <span className="font-display text-2xl text-primary-400">The Venue</span>
            <span className="text-xs uppercase tracking-widest text-muted">restaurant</span>
          </a>
          <p className="mt-6 font-body text-sm leading-relaxed text-white/60">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
            About Us
          </h3>
          <p className="font-body text-sm leading-relaxed text-white/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
            mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus
            faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-body text-sm font-bold uppercase tracking-wider text-white">
            Contact Info
          </h3>
          <ul className="space-y-3">
            {contactItems.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-3 font-body text-sm text-white/60"
              >
                <item.icon
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                  aria-hidden="true"
                />
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-primary-400">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar with Component Dock link */}
      <div className="border-t border-white/10 py-5 text-center font-body text-xs text-white/40">
        More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
