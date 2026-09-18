import { cn } from '@free-react-templates/ui'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useState } from 'react'

interface FooterProps {
  className?: string
}

const topProducts = [
  'Preventive Care',
  'Cosmetic Dentistry',
  'Orthodontics',
  'Dental Implants',
  'Teeth Whitening',
]

export function Footer({ className }: FooterProps) {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className={cn('bg-ink text-white pt-12 pb-6 px-4', className)} data-testid="footer">
      <div className="max-w-6xl mx-auto">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Top Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Top Products</h3>
            <ul className="space-y-2">
              {topProducts.map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-brand text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand" />
                <span>123 Dental Street, Suite 100, New York, NY 10001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-brand" />
                <span>+1 (234) 567-890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-brand" />
                <span>info@dentalink.com</span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to get updates on dental tips and offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Dentalink. All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/50 hover:text-brand text-sm transition-colors"
                aria-label={social}
              >
                {social === 'Facebook' && 'f'}
                {social === 'Twitter' && '𝕏'}
                {social === 'Instagram' && 'ig'}
                {social === 'LinkedIn' && 'in'}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
