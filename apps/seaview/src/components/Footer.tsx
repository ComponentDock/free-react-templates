import { Phone, MapPin, Mail } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: '+1 234 567 890',
    href: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    label: '123 Ocean Drive, Coastal City',
    href: null,
  },
  {
    icon: Mail,
    label: 'info@seaview.com',
    href: 'mailto:info@seaview.com',
  },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-6">
        {/* Logo */}
        <h2 className="text-center font-display text-3xl font-bold text-white">Seaview</h2>

        {/* Contact columns */}
        <div className="mt-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex flex-col items-center gap-3">
              <info.icon size={28} className="text-primary-400" />
              {info.href ? (
                <a href={info.href} className="text-white transition-colors hover:text-primary-400">
                  {info.label}
                </a>
              ) : (
                <span className="text-white">{info.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-10 border-t border-white/10" />

        {/* CTA link */}
        <p className="text-center text-sm text-white">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary-400 underline underline-offset-2 transition-colors hover:text-primary-400/80"
          >
            Component Dock
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-white/60">
          &copy; 2024 Seaview. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
