import { MapPin, Phone } from 'lucide-react'

const offices = [
  {
    city: 'New York',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    city: 'New Jersey',
    address: '198 West 21th Street, Suite 721 New York NY 10016',
  },
] as const

export function ContactWidget() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loan-contact-bg/1920/600)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {offices.map((office) => (
            <div key={office.city}>
              <h3 className="mb-4 text-xl font-bold text-white">{office.city}</h3>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/70">{office.address}</p>
              </div>
            </div>
          ))}
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Phone</h3>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              <a
                href="tel:+1235235598"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                +1235 235 598
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
