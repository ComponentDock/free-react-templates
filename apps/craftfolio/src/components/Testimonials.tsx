import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Fanny Spencer',
    text: 'As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.',
  },
  {
    name: 'James Whitfield',
    text: 'Absolutely outstanding work. The attention to detail and creative vision exceeded all expectations. Highly recommended for any project.',
  },
  {
    name: 'Maria Santos',
    text: 'A true professional who delivers results. The portfolio speaks for itself — quality work with a personal touch.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-30 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Testimonial cards */}
        <div className="w-full lg:w-7/12 space-y-8">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4">
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-brand"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-text-primary">{t.name}</h4>
                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand text-brand" />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Brand logos */}
        <div className="w-full lg:w-4/12">
          <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-2 gap-6 items-center">
            {[1, 2, 3, 4, 5].map((n) => (
              <img
                key={n}
                src={`https://picsum.photos/seed/craftfolio-brand${n}/120/60`}
                alt={`Brand partner ${n}`}
                className="w-full h-10 object-contain opacity-50"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
