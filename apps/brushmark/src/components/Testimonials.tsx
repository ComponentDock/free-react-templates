import { Star } from 'lucide-react'

interface TestimonialItem {
  name: string
  role: string
  text: string
  rating: number
  image: string
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    text: 'Working with Brushmark was an absolute pleasure. The design exceeded our expectations and truly captured our brand essence.',
    rating: 4,
    image: 'https://picsum.photos/seed/brushmark-testi1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    text: 'Incredible attention to detail and creative vision. The rebrand project resulted in a 40% increase in brand recognition.',
    rating: 4,
    image: 'https://picsum.photos/seed/brushmark-testi2/100/100',
  },
  {
    name: 'Emma Williams',
    role: 'Founder, CreativeHub',
    text: 'The portfolio design perfectly showcased our work. Clients consistently comment on how professional and modern our site looks.',
    rating: 4,
    image: 'https://picsum.photos/seed/brushmark-testi3/100/100',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < count ? 'fill-star-gold text-star-gold' : 'fill-star-disabled text-star-disabled'
          }
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-paper p-8">
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                  width={56}
                  height={56}
                />
                <div>
                  <h4 className="font-bold text-ink">{t.name}</h4>
                  <p className="text-sm text-mist">{t.role}</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-mist">{t.text}</p>
              <StarRating count={t.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
