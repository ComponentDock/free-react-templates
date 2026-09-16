import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Jeff Freshman',
    role: 'Guests',
    image: 'https://picsum.photos/seed/ironclad-test1/100/100',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Jeff Freshman',
    role: 'Guests',
    image: 'https://picsum.photos/seed/ironclad-test2/100/100',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Jeff Freshman',
    role: 'Guests',
    image: 'https://picsum.photos/seed/ironclad-test3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]!

  return (
    <section className="relative bg-dark py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/ironclad-test-bg/1920/800')" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-white/80 font-medium text-sm uppercase tracking-wide">
              Read Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
              It's always a joy to hear that the work we do has positively reviews
            </h2>
          </div>
          <div className="bg-dark-light/80 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <Quote className="w-8 h-8 text-brand-400 mb-2" />
                <p className="text-gray-300 leading-relaxed">{t.text}</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-white font-semibold">{t.name}</p>
              <span className="text-gray-400 text-sm">{t.role}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-400 hover:bg-brand-400 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full bg-brand-400/20 flex items-center justify-center text-brand-400 hover:bg-brand-400 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
