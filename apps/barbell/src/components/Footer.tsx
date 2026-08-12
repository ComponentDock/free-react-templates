import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Dribbble', name: 'dribbble' },
  { label: 'Behance', name: 'behance' },
]

export function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <p className="font-display text-sm font-medium uppercase tracking-wide text-white/40">
          Copyright © {new Date().getFullYear()} All rights reserved | This template is made with{' '}
          <span aria-hidden="true">&hearts;</span> by Barbell — More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white/60 transition-colors hover:text-brand"
          >
            Component Dock
          </a>
        </p>
        <ul aria-label="Social links" className="flex items-center gap-5">
          {socials.map((social) => (
            <li key={social.label} className="group relative">
              <a
                href="#home"
                aria-label={social.label}
                className="block p-2 text-white/60 transition-colors hover:text-white"
              >
                <BrandIcon name={social.name} />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 scale-0 rounded-full bg-brand transition-transform group-hover:scale-100"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
