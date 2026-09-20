import { Globe, MessageSquare, Send, Share2, MapPin, Phone, Mail } from 'lucide-react'

export interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-[#0d0d1a] pt-16 pb-8 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-5">
          {/* Brand + About */}
          <div className="md:col-span-1">
            <h3
              className="mb-4 text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Colloquium<span className="text-[#ff2d9b]">.</span>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              The biggest developer conference bringing together the brightest minds in tech.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
                aria-label="Twitter"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
                aria-label="Instagram"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-[#ff2d9b]"
                aria-label="LinkedIn"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Explore
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Pricing', 'Schedule', 'Speakers'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 transition-colors hover:text-[#ff2d9b]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Info
            </h4>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Cancellation Policy'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-[#ff2d9b]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Your Seat CTA */}
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Your Seat
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Secure your spot at the biggest developer conference of the year.
            </p>
            <a
              href="#pricing"
              className="inline-block rounded bg-[#ff2d9b] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#e6288c]"
            >
              Buy Ticket
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ff2d9b]" />
                <span>New York Convention Center, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="shrink-0 text-[#ff2d9b]" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="shrink-0 text-[#ff2d9b]" />
                <span>info@colloquium.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Colloquium. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff2d9b] transition-colors hover:text-[#e6288c]"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
