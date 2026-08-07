import { SocialLinks } from './SocialLinks'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#footer' },
] as const

export function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-slate">
      <img
        src="https://picsum.photos/seed/halcyon-footer/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <a href="#home" className="font-serif text-3xl font-bold text-white">
          Halcyon<span className="text-brand">.</span>
        </a>
        <nav aria-label="Footer" className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 flex justify-center">
          <SocialLinks variant="dark" />
        </div>
        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-sm text-white/60">
            © 2026 All rights reserved | Made with ♥ by Free React Templates
          </p>
        </div>
      </div>
    </footer>
  )
}
