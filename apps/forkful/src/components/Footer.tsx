import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const hours = [
  { day: 'Monday', time: '9:00 - 24:00' },
  { day: 'Tuesday', time: '9:00 - 24:00' },
  { day: 'Wednesday', time: '9:00 - 24:00' },
  { day: 'Thursday', time: '9:00 - 24:00' },
  { day: 'Friday', time: '9:00 - 24:00' },
  { day: 'Saturday', time: '9:00 - 24:00' },
  { day: 'Sunday', time: '9:00 - 24:00' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-3">
        {/* Brand column */}
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-brand">
            Forkful
          </a>
          <p className="mt-5 text-sm font-light leading-relaxed text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Contact column */}
        <div>
          <h4 className="mb-6 text-lg font-bold uppercase text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+23923929210" className="transition-colors hover:text-white">
                +2 392 3929 210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:info@example.com" className="transition-colors hover:text-white">
                info@example.com
              </a>
            </li>
          </ul>
        </div>

        {/* Opening hours column */}
        <div>
          <h4 className="mb-6 text-lg font-bold uppercase text-white">Opening Hours</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {hours.map((h) => (
              <li key={h.day} className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  {h.day}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-14 border-t border-white/10 bg-navy-dark px-4 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row sm:px-6">
          <p>Copyright &copy; {new Date().getFullYear()} Forkful. All rights reserved.</p>
          <p>
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
