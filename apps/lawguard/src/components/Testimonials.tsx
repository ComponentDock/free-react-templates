import { useState } from 'react'

const testimonials = [
  {
    id: 'angela',
    name: 'Angela Smith',
    role: 'CEO, Co-Founder',
    image: 'https://picsum.photos/seed/lawguard-angela/100/100',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    id: 'joshua',
    name: 'Joshua Hamilton',
    role: 'Web Designer',
    image: 'https://picsum.photos/seed/lawguard-joshua/100/100',
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    id: 'janice',
    name: 'Janice Bruce',
    role: 'Web Designer',
    image: 'https://picsum.photos/seed/lawguard-janice/100/100',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life one day.',
  },
]

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const active = testimonials[activeIdx]!

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h3 className="mb-12 text-3xl font-bold text-charcoal">Testimonials</h3>

        {/* Avatar tabs */}
        <div
          className="mb-10 flex justify-center gap-6"
          role="tablist"
          aria-label="Testimonial authors"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              onClick={() => setActiveIdx(i)}
              className={`flex flex-col items-center gap-2 transition-opacity ${
                activeIdx === i ? 'opacity-100' : 'opacity-50 hover:opacity-75'
              }`}
            >
              <img src={t.image} alt={t.name} className="h-16 w-16 rounded-full object-cover" />
              <span className="text-xs font-medium text-charcoal">{t.name}</span>
              <span className="text-xs text-gray-500">{t.role}</span>
            </button>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          role="tabpanel"
          aria-label={`Testimonial from ${active.name}`}
          className="mb-6 text-lg leading-relaxed italic text-gray-600"
        >
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <p className="text-sm font-semibold text-charcoal">— {active.name}</p>
        <p className="text-xs text-gray-500">{active.role}</p>
      </div>
    </section>
  )
}
