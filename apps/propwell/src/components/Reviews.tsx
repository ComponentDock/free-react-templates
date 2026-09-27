import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const REVIEWS = [
  {
    id: 1,
    stars: 5,
    text: 'Propwell made finding our dream home an absolute breeze. Their team was professional, attentive, and truly understood our needs.',
    author: 'Jennifer Wilson',
    role: 'Home Buyer',
  },
  {
    id: 2,
    stars: 5,
    text: 'The service we received was exceptional. From start to finish, the team handled everything with utmost professionalism.',
    author: 'Robert Johnson',
    role: 'Property Investor',
  },
  {
    id: 3,
    stars: 4,
    text: 'Great experience with Propwell. They helped us find the perfect rental property within our budget and preferences.',
    author: 'Emily Davis',
    role: 'Tenant',
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((idx) => (idx + 1) % REVIEWS.length)
  const prev = () => setCurrent((idx) => (idx - 1 + REVIEWS.length) % REVIEWS.length)

  const review = REVIEWS[current]!

  return (
    <section
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://picsum.photos/seed/propwell-reviews/1600/800')" }}
      aria-label="Customer reviews"
    >
      <div className="absolute inset-0 bg-bg-dark/90" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">What Our Clients Say</h2>
        <div className="bg-white/10 backdrop-blur-sm p-8">
          <Quote className="h-8 w-8 text-primary mx-auto mb-4" />
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: review.stars }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg text-white italic mb-6">&ldquo;{review.text}&rdquo;</p>
          <div className="text-white">
            <p className="font-bold">{review.author}</p>
            <p className="text-sm text-white/70">{review.role}</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
