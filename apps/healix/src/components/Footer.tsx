import { Phone, Mail, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface FooterProps {
  className?: string
}

const departments = [
  'Neurology',
  'Ophthalmology',
  'Nuclear Magnetic',
  'X-Ray',
  'Surgical',
  'Cardiology',
  'Dental',
]

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-gray-900 text-gray-300', className)} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Healix</h3>
            <p className="text-sm leading-relaxed mb-4">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Departments</h3>
            <ul className="space-y-2 text-sm">
              {departments.map((dept) => (
                <li key={dept}>
                  <a href="#departments" className="hover:text-white transition-colors">
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Have a Question?</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>123 Medical Center Dr, Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" aria-hidden="true" />
                <a href="tel:+12345678900" className="hover:text-white transition-colors">
                  +1 234 567 8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" aria-hidden="true" />
                <a href="mailto:info@healix.com" className="hover:text-white transition-colors">
                  info@healix.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} Healix. All rights reserved.</span>
          <span>
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
