import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Brayden Shar',
    role: 'CEO, Greenfield Corp',
    image: 'https://picsum.photos/seed/landcraft-client1/100/100',
    rating: 4,
    quote:
      'Landcraft transformed our corporate campus into a stunning landscape that impresses clients and boosts employee morale. Exceptional quality and professionalism.',
  },
  {
    name: 'Robert Kyle',
    role: 'Director, Sunnyvale HOA',
    image: 'https://picsum.photos/seed/landcraft-client2/100/100',
    rating: 5,
    quote:
      'Outstanding service from start to finish. The team was punctual, creative, and delivered a garden that exceeded our expectations. Highly recommended.',
  },
  {
    name: 'Maria Chen',
    role: 'Homeowner',
    image: 'https://picsum.photos/seed/landcraft-client3/100/100',
    rating: 5,
    quote:
      "Our backyard has been completely transformed. The attention to detail and quality of work is unmatched. We couldn't be happier with the results.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24" data-testid="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clients Say</h2>
          <p className="text-body">
            Hear from our satisfied clients about their experience working with Landcraft.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-bold text-heading">{t.name}</h3>
                  <p className="text-sm text-body">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-sm text-body italic">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
