import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    seed: 'verdure-person-1',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    id: 2,
    seed: 'verdure-person-2',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 3,
    seed: 'verdure-person-3',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-verdure-400 text-sm uppercase tracking-widest font-medium">
            Testimonial
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white rounded-lg p-8 shadow-sm text-center">
              <Quote className="w-10 h-10 text-verdure-400 mx-auto mb-4 rotate-180" />
              <p className="text-gray-600 italic mb-6">{t.quote}</p>
              <img
                src={`https://picsum.photos/seed/${t.seed}/100/100`}
                alt="Roger Scott"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                loading="lazy"
              />
              <h4 className="font-semibold text-gray-900">Roger Scott</h4>
              <span className="text-verdure-400 text-sm">Marketing Manager</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
