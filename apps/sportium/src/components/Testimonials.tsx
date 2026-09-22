import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Diane Smith',
    role: 'client',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis efficitur ut magna.',
    rating: 4,
    image: 'https://picsum.photos/seed/sportium-test1/80/80',
  },
  {
    name: 'Mark Johnson',
    role: 'client',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis efficitur ut magna.',
    rating: 4,
    image: 'https://picsum.photos/seed/sportium-test2/80/80',
  },
  {
    name: 'Sarah Williams',
    role: 'client',
    text: 'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis efficitur ut magna.',
    rating: 5,
    image: 'https://picsum.photos/seed/sportium-test3/80/80',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-gold text-gold' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: `url('https://picsum.photos/seed/sportium-test-bg/1920/800')` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">
          welcome to sportium
        </p>
        <h2 className="mb-12 text-3xl font-bold md:text-4xl">Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-16 w-16 shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="mb-2 text-xs text-white/60">{t.role}</p>
                <p className="mb-3 text-sm leading-relaxed text-white/80">{t.text}</p>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#footer"
            className="inline-block rounded-full bg-brand-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}
