import { ArrowUp } from 'lucide-react'

const QUICK_LINKS = ['Home', 'About', 'Services', 'Blog', 'Contact']
const CAKES = ['Blackforest', 'Bodhubon', 'Rongdhonu', 'Meghrong']

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-warm-900 pt-20 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-4 block font-display text-2xl font-bold">
              Bonquet
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              Land behold it created good saw after she&apos;d Our set living. Signs midst dominion
              creepeth morning laboris nisi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-base font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cakes */}
          <div>
            <h4 className="mb-4 font-display text-base font-medium">Cakes</h4>
            <ul className="space-y-2">
              {CAKES.map((cake) => (
                <li key={cake}>
                  <a
                    href="#menu"
                    className="text-sm text-white/60 transition-colors hover:text-brand-400"
                  >
                    {cake}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-base font-medium">Contact Us</h4>
            <p className="mb-2 text-sm text-white/60">76/A, Green Lane, Dhanmondi, NYC</p>
            <a href="tel:+10787389083" className="mb-1 block text-sm text-brand-400">
              +10 (78) 738-9083
            </a>
            <a href="mailto:bonquet89@gmail.com" className="block text-sm text-brand-400">
              bonquet89@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Bonquet. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand-400 underline underline-offset-2 hover:text-brand-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Go to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-white transition-colors hover:bg-brand-500"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
