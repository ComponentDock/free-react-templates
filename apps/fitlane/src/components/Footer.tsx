import { Phone, Mail, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    title: 'Talk to Us',
    lines: ['+34 5667 4332 244', '+224 667 889'],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['contact@fitlane25.com', 'office@fitlane25.com'],
  },
  {
    icon: MapPin,
    title: 'Location',
    lines: ['Main St. 25', '458811 CA'],
  },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy-500 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        {contactItems.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center">
            <item.icon className="mb-4 h-8 w-8 text-primary-500" aria-hidden="true" />
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              {item.title}
            </h3>
            <ul className="space-y-1 text-sm text-white/70">
              {item.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} All rights reserved &mdash; Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 transition-colors hover:text-primary-400"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
