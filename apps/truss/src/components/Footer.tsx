import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Instagram', name: 'instagram' },
  { label: 'X', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Dribbble', name: 'dribbble' },
]

const projectLinks = [
  'La Lega Stadium',
  'France Building',
  '22 New Homes',
  'Manage Center',
  'Sports Hall',
] as const

const serviceLinks = ['Architect', 'Interior Design', 'Landscape Design', 'Consultancy'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-paper py-16 text-mist dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-base font-bold text-ink dark:text-white">
              About Truss.
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <h3 className="mt-8 font-display text-base font-bold text-ink dark:text-white">
              Connect
            </h3>
            <div className="mt-4 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-mist text-white transition-colors hover:bg-brand-hover"
                >
                  <BrandIcon name={social.name} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ink dark:text-white">Projects</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {projectLinks.map((label) => (
                <li key={label}>
                  <a href="#projects" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ink dark:text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ink dark:text-white">Contact</h3>
            <p className="mt-4 text-sm leading-relaxed">43 Raymouth Rd. Baltemoer, London 3910</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+11234567890" className="transition-colors hover:text-brand">
                  +1(123)-456-7890
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="transition-colors hover:text-brand">
                  +1(123)-456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@mydomain.com" className="transition-colors hover:text-brand">
                  info@mydomain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-8 text-center text-xs sm:flex-row sm:text-left dark:border-white/10">
          <p>© 2026 Truss. All rights reserved.</p>
          <p>recreation of ColorLib Kraft</p>
        </div>
      </div>
    </footer>
  )
}
