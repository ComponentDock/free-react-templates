import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'Cardwell transformed our brand identity completely. The attention to detail and creative vision exceeded all our expectations. Highly recommended!',
    author: 'Sarah Mitchell',
    role: 'CEO, TechVibe',
    image: 'https://picsum.photos/seed/cardwell-testimonial-1/100/100',
  },
  {
    text: 'Working with Cardwell was an absolute pleasure. The web application they built for us is fast, beautiful, and our users love it.',
    author: 'James Rodriguez',
    role: 'Founder, StartupLab',
    image: 'https://picsum.photos/seed/cardwell-testimonial-2/100/100',
  },
  {
    text: 'The design system Cardwell created has streamlined our entire product development process. True professional with an eye for quality.',
    author: 'Emily Chen',
    role: 'Product Lead, InnovateCo',
    image: 'https://picsum.photos/seed/cardwell-testimonial-3/100/100',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24" role="region" aria-label="Testimonials">
      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-heading)] text-[250px] font-bold uppercase leading-none text-[#f0f0f0] opacity-50"
      >
        Quotes
      </span>

      {/* Rotated vertical label */}
      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-xs font-bold uppercase tracking-[4px] text-gray-300"
      >
        Testimonials
      </span>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <blockquote key={index} className="rounded bg-white p-8 shadow-sm">
              <Quote size={32} className="mb-4 text-brand/30" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-gray-500">{t.text}</p>
              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
                <img
                  src={t.image}
                  alt={t.author}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-heading">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
