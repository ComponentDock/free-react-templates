import { cn } from '@free-react-templates/ui'

const quickMenu = ['Home', 'About', 'Our Trainers', 'News', 'Contacts', 'The Club', 'Privacy']
const programs = ['Body Building', 'Morning Energy', 'Stretching', 'Weight Lifting']

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2z',
  },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* About */}
          <div className="md:col-span-4">
            <h4 className="mb-4 text-xl font-bold text-white">
              Grit<span className="font-normal">Box</span>
            </h4>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              GritBox is a premier crossfit and gym facility dedicated to helping you achieve your
              fitness goals. Join our community and start your transformation today.
            </p>
            <a
              href="#"
              className={cn(
                'inline-block rounded-full bg-brand px-6 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-brand-dark',
              )}
            >
              Read More
            </a>
          </div>

          {/* Quick Menu + Program */}
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h5 className="mb-4 text-sm font-bold uppercase text-white">Quick Menu</h5>
                <ul className="space-y-2">
                  {quickMenu.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-white/30 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-4 text-sm font-bold uppercase text-white">Program</h5>
                <ul className="space-y-2">
                  {programs.map((item) => (
                    <li key={item}>
                      <a
                        href="#program"
                        className="text-sm text-white/30 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h5 className="mb-4 text-sm font-bold uppercase text-white">Follow Us</h5>
            <div className="flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/50 transition-colors hover:bg-brand hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} GritBox. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
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
