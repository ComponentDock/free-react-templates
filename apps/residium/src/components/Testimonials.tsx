import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Margaret Lawson',
    role: 'Creative Director',
    quote:
      'Working with Residium was an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations in every way.',
    seed: 'author-1',
  },
  {
    name: 'James Mitchell',
    role: 'Property Investor',
    quote:
      'The team at Residium provided exceptional service from start to finish. I highly recommend them for any real estate needs.',
    seed: 'author-2',
  },
  {
    name: 'Sarah Chen',
    role: 'Interior Designer',
    quote:
      'Residium understands the art of creating beautiful living spaces. Their properties consistently demonstrate outstanding design quality.',
    seed: 'author-3',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-navy-800">What Our Clients Say</h2>
          <div className="mx-auto mt-4 flex justify-center gap-1">
            <span className="h-1 w-12 bg-red-500" />
            <span className="h-1 w-4 bg-red-500" />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, role, quote, seed }) => (
            <div key={seed} className="text-center">
              <Quote className="mx-auto mb-4 h-8 w-8 rotate-180 text-red-300" />
              <p className="text-sm leading-relaxed text-gray-500 italic">"{quote}"</p>
              <img
                src={`https://picsum.photos/seed/residium-${seed}/80/80`}
                alt={name}
                className="mx-auto mt-6 h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-heading text-lg font-semibold text-navy-800">{name}</h4>
              <span className="text-xs text-red-500">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
