import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Fern made finding our dream home so easy. The agents were professional and responsive.',
    name: 'Sarah Geronimo',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/fern-test1/100/100',
  },
  {
    id: 2,
    quote:
      'Excellent service! They helped us find the perfect investment property in just two weeks.',
    name: 'John Dorf',
    role: 'Investor',
    avatar: 'https://picsum.photos/seed/fern-test2/100/100',
  },
  {
    id: 3,
    quote: 'The whole process was seamless. I recommend Fern to anyone looking for real estate.',
    name: 'Jessica Moore',
    role: 'First-time Buyer',
    avatar: 'https://picsum.photos/seed/fern-test3/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">Happy Clients</h2>
        <p className="mb-12 text-center text-mist">What our clients say about us</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-3 flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-4 italic text-mist">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="text-xs text-mist">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
