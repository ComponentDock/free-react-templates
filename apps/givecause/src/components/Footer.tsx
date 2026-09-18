import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

const quickLinks = ['Home', 'About', 'Causes', 'Events', 'Blog']
const supportLinks = ['FAQ', 'Contact Us', 'Privacy Policy', 'Terms of Service']

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-heading text-white pt-20 md:pt-28 pb-8', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & about */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">GiveCause</h3>
            <p className="font-body text-white/70 text-sm leading-relaxed">
              Dedicated to making the world a better place through compassion, community, and
              action.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-utility text-sm text-white/70 hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-utility text-sm text-white/70 hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Newsletter</h4>
            <p className="font-utility text-sm text-white/70 mb-4">
              Subscribe to get the latest updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-[5px] bg-white/10 text-white placeholder:text-white/50 font-utility text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-brand px-4 py-2 rounded-r-[5px] hover:bg-brand-hover transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-footer-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-utility text-sm text-muted-light">
            &copy; {new Date().getFullYear()} GiveCause. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-light hover:text-brand transition-colors font-utility text-sm"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-light hover:text-brand transition-colors font-utility text-sm"
            >
              t
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-light hover:text-brand transition-colors font-utility text-sm"
            >
              ig
            </a>
          </div>
          <p className="font-utility text-sm text-muted-light">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
