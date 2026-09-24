import { BrandIcon } from './BrandIcon'

const footerLinks = ['Home', 'News', 'Sport', 'Lifestyle', 'Fashion', 'Music', 'Business']
const socials = [
  { name: 'facebook' as const, label: 'Facebook', href: '#' },
  { name: 'twitter' as const, label: 'Twitter', href: '#' },
  { name: 'instagram' as const, label: 'Instagram', href: '#' },
  { name: 'youtube' as const, label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold uppercase tracking-tight">Pressbox</span>
              <span className="rounded bg-brand-red px-1.5 py-0.5 text-[10px] font-bold leading-none">
                24H
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              Your trusted source for the latest news, trends, and stories from around the world.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Quick Links</h3>
            <ul className="flex flex-wrap gap-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/60 transition-colors hover:text-brand-red"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Follow Us</h3>
            <ul className="flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded bg-white/10 text-white/70 transition-colors hover:bg-brand-red hover:text-white"
                  >
                    <BrandIcon name={s.name} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6">
          <p className="text-xs text-white/40">&copy; 2025 Pressbox. All rights reserved.</p>
          <p className="text-xs text-white/40">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand-red transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
