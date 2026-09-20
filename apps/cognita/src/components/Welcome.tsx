import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const panels = [
  {
    title: 'What courses are available?',
    content:
      'We offer courses in web development, data science, mobile development, digital marketing, and many more fields.',
  },
  {
    title: 'How do I enroll?',
    content:
      'Simply create an free account, browse our course catalog, and click enroll on any course that interests you.',
  },
  {
    title: 'Are certificates provided?',
    content:
      'Yes, upon successful completion of a course you will receive a validated certificate of completion.',
  },
]

export function Welcome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">
              Welcome to Cognita
            </h2>
            <p className="mt-4 text-body">
              When she reached the first hills of the Italic Mountains, she had a last view back on
              the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
              subline of her own road, the Line Lane.
            </p>
            <p className="mt-2 text-body">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="divide-y divide-gray-200 rounded-lg border border-gray-200">
            {panels.map((panel, i) => (
              <div key={panel.title}>
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-heading text-base font-semibold text-heading hover:bg-gray-50"
                  aria-expanded={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  {panel.title}
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4 text-sm text-body">{panel.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
