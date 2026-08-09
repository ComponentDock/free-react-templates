import { Star } from 'lucide-react'
import { Reveal } from './Reveal'

interface Testimonial {
  quote: string
  name: string
  role: string
  seed: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Treadly has completely transformed my running experience. The Velocity Runner Pro helped me PR at my last marathon by 8 minutes.',
    name: 'Marcus Chen',
    role: 'Marathon Runner',
    seed: 'treadly-marcus',
  },
  {
    quote:
      'I wear Treadly shoes for all my classes. They are versatile, stylish, and most importantly, my feet never hurt after a long day of training.',
    name: 'Emily Rodriguez',
    role: 'Fitness Instructor',
    seed: 'treadly-emily',
  },
  {
    quote:
      'The quality and attention to detail is unmatched. I have been collecting sneakers for 15 years and Treadly has become my go-to brand.',
    name: 'David Kim',
    role: 'Sneaker Enthusiast',
    seed: 'treadly-david',
  },
] as const

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '15K+', label: '5-Star Reviews' },
  { value: '98%', label: 'Would Recommend' },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-950 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Join thousands of happy customers who have made Treadly their go-to footwear brand
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ quote, name, role, seed }, index) => (
            <Reveal key={name} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-gray-800 bg-gray-900 p-7">
                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${seed}/96/96`}
                    alt={name}
                    className="h-12 w-12 rounded-full object-cover"
                    width={96}
                    height={96}
                  />
                  <div>
                    <p className="font-display font-bold">{name}</p>
                    <p className="text-sm text-gray-400">{role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-gray-800 pt-10 text-center lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="order-2 mt-1 text-sm text-gray-400">{label}</dt>
                <dd className="font-display text-3xl font-extrabold text-primary-500">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
