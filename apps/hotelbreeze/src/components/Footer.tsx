import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-ink py-12 text-white', className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Hotelbreeze</h3>
            <p className="text-sm leading-relaxed text-white/70">
              A minimalist luxury hotel experience with elegant rooms, fine dining, and world-class
              service.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#rooms" className="transition-colors hover:text-white">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#about-us" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">More</h4>
            <p className="text-sm text-white/70">
              More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                className="underline transition-colors hover:text-white"
              >
                Component Dock
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} Hotelbreeze. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
