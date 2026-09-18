import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    quote:
      'LocalFinder helped me discover amazing local services I never knew existed. The platform is incredibly easy to use!',
    avatar: 'https://picsum.photos/seed/lf-avatar1/80/80',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Frequent Traveler',
    quote:
      'Whenever I visit a new city, LocalFinder is my go-to for finding the best restaurants and shops nearby.',
    avatar: 'https://picsum.photos/seed/lf-avatar2/80/80',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Event Planner',
    quote:
      'The categories and search make it so easy to find exactly what I need. Highly recommended for anyone looking for local gems.',
    avatar: 'https://picsum.photos/seed/lf-avatar3/80/80',
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">What Our Users Say</h2>
        <p className="text-gray-400 text-sm mb-10">
          Discover amazing places and services in your neighborhood
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={`${t.name}-star-${i}`}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
