import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Client One',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    rating: 5,
  },
  {
    name: 'Client Two',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    rating: 5,
  },
  {
    name: 'Client Three',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="bg-tooth-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-tooth-teal">
            Testimonial
          </span>
          <h2 className="mt-2 text-3xl font-bold text-tooth-dark-blue">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ name, text, rating }) => (
            <div key={name} className="rounded-lg bg-white p-8 shadow-md">
              <p className="mb-4 italic text-tooth-muted">&ldquo;{text}&rdquo;</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'fill-tooth-teal text-tooth-teal' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="mt-3 font-semibold text-tooth-dark-blue">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
