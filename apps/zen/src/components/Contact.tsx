import { MapPin, Phone, Mail } from 'lucide-react'

const info = [
  { icon: MapPin, text: '123 Serenity Lane, New York, NY 10001' },
  { icon: Phone, text: '+1 (555) 234-5678' },
  { icon: Mail, text: 'hello@zenstudio.com' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map placeholder */}
          <div className="flex min-h-[400px] items-center justify-center rounded-lg bg-gray-100">
            <iframe
              title="Studio location map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!1!5e0!3m2!1sen!2sbd"
              sandbox="allow-scripts allow-same-origin"
              className="h-full w-full rounded-lg border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Contact info */}
          <div>
            <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-zen-muted">
              Beginner & Advanced
            </span>
            <h3 className="mb-6 text-2xl font-bold uppercase tracking-[2px] text-zen-purple">
              Meditation Sessions
            </h3>
            <p className="mb-8 leading-relaxed text-zen-muted">
              Ready to begin your journey? Reach out to us for class schedules,
              trial sessions, or any questions about our meditation and yoga
              programs.
            </p>
            <h4 className="mb-4 text-base font-semibold text-zen-purple">Information</h4>
            <ul className="space-y-3">
              {info.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-zen-muted">
                  <item.icon className="h-5 w-5 flex-shrink-0 text-zen-gradient-from" aria-hidden="true" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
