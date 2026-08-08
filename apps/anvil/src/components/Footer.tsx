import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

const companyLinks = ['About', 'Approach', 'Sustainability', 'Careers'] as const
const navLinks = ['Home', 'About', 'Services', 'Projects', 'News', 'Contact'] as const
const quickLinks = ['Manufacturing', 'Engineering', 'Energy', 'Construction'] as const

export function Footer() {
  return (
    <footer className="bg-coal py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#home" className="font-display text-2xl font-extrabold uppercase">
              Anvil<span className="text-brand">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto eaque qui illo
              cumque officia nobis assumenda.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {companyLinks.map((label) => (
                <li key={label}>
                  <a href="#about" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Navigations</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase()}`}
                    className="transition-colors hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold uppercase">Quick Menu</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              {quickLinks.map((label) => (
                <li key={label}>
                  <a href="#services" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
            <div>
              <h3 className="font-display text-lg font-bold uppercase">Europe</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>London - 2398</li>
                <li>10 Japson Street</li>
                <li>Tel. + (123) 3240-345-9348</li>
                <li>Mail. europe@youdomain.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold uppercase">USA</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>New York - 2398</li>
                <li>10 Hadson Carl Street</li>
                <li>Mail. usa@youdomain.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>Copyright © 2026 Anvil. All Rights Reserved.</p>
          <p>recreation of ColorLib Industrie</p>
        </div>
      </div>
    </footer>
  )
}
