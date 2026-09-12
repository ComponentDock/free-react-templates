import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'SkyLens delivered exceptional aerial photography for our real estate listings. The quality and turnaround time exceeded our expectations.',
    name: 'Sarah Mitchell',
    role: 'Marketing Director, Pinnacle Realty',
  },
  {
    text: 'The construction monitoring service has been invaluable. We can track progress remotely and share updates with stakeholders instantly.',
    name: 'James Cooper',
    role: 'Project Manager, BuildRight Inc.',
  },
  {
    text: 'Professional, reliable, and incredibly talented. The drone footage transformed our promotional video into something truly cinematic.',
    name: 'Emily Torres',
    role: 'Creative Director, Vista Media',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/skylens-testimonial/1920/800)',
        }}
      />
      <div className="absolute inset-0 bg-heading/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <Quote className="mx-auto mb-6 h-10 w-10 text-brand" />
        <p className="mb-8 text-lg leading-relaxed text-white italic">
          &ldquo;{current.text}&rdquo;
        </p>
        <div className="mb-2 flex justify-center">
          <img
            src={`https://picsum.photos/seed/skylens-test-${active}/60/60`}
            alt={current.name}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>
        <p className="font-sans text-lg font-semibold text-white">{current.name}</p>
        <p className="font-body text-sm text-footer-text">{current.role}</p>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === active ? 'bg-brand' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
