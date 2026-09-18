import { Quote, Phone } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    text: 'Exceptional service! They arrived within 20 minutes and had our door unlocked without any damage. Highly recommend to everyone.',
    name: 'Sarah Johnson',
    location: 'New York, USA',
  },
  {
    text: 'Professional and affordable. The team installed a complete security system for our office and it works flawlessly.',
    name: 'Michael Chen',
    location: 'San Francisco, USA',
  },
  {
    text: 'We have been using Keycraft for all our properties. Their response time and quality of work is consistently outstanding.',
    name: 'Emily Davis',
    location: 'London, UK',
  },
] as const

export function Testimonial() {
  const [active, setActive] = useState(0)

  return (
    <section aria-label="Testimonials" className="grid lg:grid-cols-2">
      {/* Left — dark overlay */}
      <div
        className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center p-8 lg:min-h-[600px]"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/keycraft-testimonial/960/800)',
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
            Professional Services
          </p>
          <h3 className="mt-3 font-display text-3xl font-bold uppercase text-white sm:text-4xl">
            Get a Professional Services. Call us Now.
          </h3>
          <a
            href="tel:+18005566688"
            className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-primary-400"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            +1 800 556 6688
          </a>
        </div>
      </div>

      {/* Right — testimonials */}
      <div className="flex flex-col justify-center bg-white p-8 lg:p-12">
        <div className="flex items-center gap-3">
          <Quote className="h-8 w-8 text-primary-400" aria-hidden="true" />
          <h2 className="font-display text-3xl font-bold uppercase text-teal">Testimonial</h2>
        </div>

        <div className="mt-8">
          {testimonials.map((t, i) => (
            <div key={t.name} className={i === active ? 'block' : 'hidden'}>
              <p className="leading-relaxed text-smoke italic">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 font-display text-lg font-bold text-teal">{t.name}</p>
              <p className="text-sm text-smoke">{t.location}</p>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="mt-6 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === active ? 'bg-primary-400' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
