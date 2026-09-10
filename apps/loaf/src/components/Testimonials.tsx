import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: 'https://picsum.photos/seed/loaf-avatar1/100/100',
    review:
      'The sourdough bread is absolutely incredible. The crust is perfectly crispy and the inside is so soft and flavorful. Best bakery in town!',
  },
  {
    name: 'Michael Chen',
    avatar: 'https://picsum.photos/seed/loaf-avatar2/100/100',
    review:
      'I order their pastries every weekend for my family. The croissants are flaky, buttery, and absolutely divine. A true gem!',
  },
  {
    name: 'Emily Davis',
    avatar: 'https://picsum.photos/seed/loaf-avatar3/100/100',
    review:
      'Their pizza is out of this world. Fresh ingredients, perfect crust, and the sauce is made in-house. I keep coming back for more.',
  },
]

function StarRating() {
  return (
    <div className="mb-3 flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} className="h-4 w-4 fill-brand text-brand" aria-hidden="true" />
      ))}
      <span className="sr-only">5 out of 5 stars</span>
    </div>
  )
}

export function Testimonials() {
  return (
    <section
      id="review"
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-32"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/loaf-testimonials/1920/1080)',
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Enjoy our Client&rsquo;s Review
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            What our happy customers say about our bakery and the delicious items we create every
            day.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
              <img
                src={t.avatar}
                alt={t.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover ring-2 ring-brand"
                loading="lazy"
              />
              <StarRating />
              <p className="mb-4 text-white/80">&ldquo;{t.review}&rdquo;</p>
              <h4 className="font-semibold text-white">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
