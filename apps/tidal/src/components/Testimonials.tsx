import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Traveler',
    image: 'https://picsum.photos/seed/tidal-avatar1/100/100',
    rating: 5,
    text: 'Amazing experience! The team made everything so easy. I would highly recommend Tidal to anyone looking for a hassle-free vacation.',
  },
  {
    name: 'Michael Chen',
    role: 'Backpacker',
    image: 'https://picsum.photos/seed/tidal-avatar2/100/100',
    rating: 5,
    text: 'From start to finish, the service was exceptional. Our trip to Thailand was perfectly organized and we had the time of our lives.',
  },
  {
    name: 'Emma Williams',
    role: 'Family Vacationer',
    image: 'https://picsum.photos/seed/tidal-avatar3/100/100',
    rating: 4,
    text: 'Tidal took care of every detail for our family trip. The kids loved it, and we could relax knowing everything was handled.',
  },
] as const

export function Testimonials() {
  return (
    <section
      aria-label="Testimonials"
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/seed/tidal-testimonial-bg/1920/800')",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">
            Tourist Feedback
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">Tourist Feedback</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-lg bg-white/95 p-8 shadow-lg backdrop-blur-sm">
              <Quote className="h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-secondary">{item.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
