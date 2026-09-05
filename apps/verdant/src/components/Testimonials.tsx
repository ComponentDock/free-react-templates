import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Verdant is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!',
    author: 'Mr. Nick Jonas',
    role: 'CEO of NAVATECH',
    seed: 'verdant-t1',
  },
  {
    quote:
      'Verdant is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!',
    author: 'Mr. Nazrul Islam',
    role: 'CEO of NAVATECH',
    seed: 'verdant-t2',
  },
  {
    quote:
      'Verdant is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!',
    author: 'Mr. Jonas Nick',
    role: 'CEO of NAVATECH',
    seed: 'verdant-t3',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]!

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={`https://picsum.photos/seed/${current.seed}/600/400`}
              alt="Testimonial"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="mb-2 text-3xl font-bold text-ink">TESTIMONIAL</h2>
            <p className="mb-6 text-mist">Some kind words from clients about Verdant</p>
            <Quote className="mb-4 h-8 w-8 text-brand" />
            <p className="mb-6 italic leading-relaxed text-ink">&ldquo;{current.quote}&rdquo;</p>
            <div>
              <h6 className="font-semibold text-ink">{current.author}</h6>
              <p className="text-sm text-mist">{current.role}</p>
            </div>
            {/* Dots */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    active === i ? 'bg-brand' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
