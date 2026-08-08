import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'X', name: 'x' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
]

const navColumn: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#home' },
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#home' },
  { label: 'Blog', href: '#home' },
]

const pressColumn: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Press', href: '#home' },
  { label: 'Blog', href: '#home' },
  { label: 'Contact', href: '#contact' },
  { label: 'Support', href: '#home' },
  { label: 'Privacy', href: '#home' },
]

const legalColumn: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Privacy', href: '#home' },
  { label: 'FAQ', href: '#home' },
  { label: 'Careers', href: '#home' },
  { label: 'Procedure', href: '#home' },
  { label: 'Team', href: '#home' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[5fr_6fr]">
        <div>
          <h2 className="font-display text-xl font-bold uppercase text-ink dark:text-white">
            Trellis
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <h3 className="mt-8 font-display text-lg font-bold uppercase text-ink dark:text-white">
            Connect with us
          </h3>
          <ul className="mt-4 flex items-center gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[5px] bg-paper text-ink transition-colors hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-brand"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <nav aria-label="Navigation links">
            <h3 className="font-display text-lg font-bold uppercase text-ink dark:text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navColumn.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-mist transition-colors hover:text-brand dark:text-white/60 dark:hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Press links">
            <ul className="mt-4 space-y-2.5 sm:mt-12">
              {pressColumn.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-mist transition-colors hover:text-brand dark:text-white/60 dark:hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal links">
            <ul className="mt-4 space-y-2.5 sm:mt-12">
              {legalColumn.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-mist transition-colors hover:text-brand dark:text-white/60 dark:hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-charcoal py-5 text-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-white/60 sm:flex-row sm:px-6 sm:text-left">
          <p>© 2026 Trellis. All rights reserved.</p>
          <p>recreation of ColorLib Monarch</p>
        </div>
      </div>
    </footer>
  )
}
