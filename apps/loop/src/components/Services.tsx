import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
  {
    title: 'Web Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Graphic Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Web/Mobile Application',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Brand Identity',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Services() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + services.length) % services.length)
  const next = () => setActive((i) => (i + 1) % services.length)

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Intro text */}
        <div className="mb-16 flex justify-end">
          <div className="max-w-md border-l-2 border-coral-400 pl-6">
            <p className="text-base leading-relaxed text-navy-600">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-12">
          <h2 className="mb-2 text-4xl font-bold text-navy-900">What We Offer</h2>
          <p className="text-lg text-navy-500">Far far away behind the word mountains</p>
        </div>

        {/* Image + slider */}
        <div className="grid gap-8 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/loop-service/700/500"
            alt="Services showcase"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />

          <div className="relative flex flex-col justify-center bg-navy-900 rounded-lg p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-white">{services[active]!.title}</h3>
            <p className="mb-4 text-navy-200">{services[active]!.description}</p>
            <p className="text-navy-300">
              Separated they live in Bookmarksgrove right at the coast of the Semantics.
            </p>

            {/* Navigation */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-600 text-white transition-colors hover:bg-coral-400 hover:border-coral-400"
                aria-label="Previous service"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-600 text-white transition-colors hover:bg-coral-400 hover:border-coral-400"
                aria-label="Next service"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-4 flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-coral-400' : 'w-2 bg-navy-600'
                  }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
