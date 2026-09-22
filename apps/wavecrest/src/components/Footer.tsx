import { MapPin, Phone, Mail } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, text: '123 Ocean Drive, Malibu, CA 90265' },
  { icon: Phone, text: '+1 (310) 555-0199' },
  { icon: Mail, text: 'info@wavecrest.com' },
] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-navy py-16 text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl text-white">Wavecrest</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            A luxury beach hotel and resort offering world-class amenities, stunning ocean views,
            and an unforgettable stay on the California coast.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Contact Info</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {contactInfo.map((item) => (
              <li key={item.text} className="flex items-start gap-2">
                <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-gray-400">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold uppercase text-white">Book Now</h4>
          <p className="mt-4 text-sm text-gray-400">
            Ready to experience Wavecrest? Reserve your room today.
          </p>
          <a
            href="#home"
            className="mt-6 inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-red"
          >
            Book Now
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-sm text-gray-500 sm:px-6">
        <p>Copyright &copy; {new Date().getFullYear()} Wavecrest. All rights reserved.</p>
        <p className="mt-2">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-coral-light"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
