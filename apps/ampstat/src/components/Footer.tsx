import { LogoBars } from './Navbar'

const SOCIAL_LINKS = ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance'] as const

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/ampstat-footer/1920/400')` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Footer content */}
      <div className="relative z-10 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo */}
          <a href="#" className="inline-flex items-end gap-1 mb-6">
            <LogoBars />
            <span className="text-3xl font-semibold text-white leading-none pb-0.5">music</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {SOCIAL_LINKS.map((name) => (
              <a
                key={name}
                href="#"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold hover:bg-brand-green transition-colors"
                aria-label={name}
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 bg-brand-purple/90 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved · Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-green hover:text-brand-yellow-light transition-colors"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
