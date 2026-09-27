import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const panels = [
  {
    title: 'Why choose me?',
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
    ),
  },
  {
    title: 'What I do?',
    content: (
      <div>
        <p className="mb-3">
          Far far away, behind the <strong>mountains</strong>, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
          the coast of the Semantics, a large language ocean.
        </p>
        <ul className="list-inside list-disc space-y-1 text-gray-600">
          <li>Separated they live in Bookmarksgrove right</li>
          <li>Separated they live in Bookmarksgrove right</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'My Specialties',
    content: (
      <p>
        Far far away, behind the <strong>mountains</strong>, far from the countries Vokalia and
        Consonantia, there live the blind texts.
      </p>
    ),
  },
]

export function About() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Images */}
          <div className="relative h-[500px]">
            <div
              className="absolute top-0 left-0 h-[350px] w-[80%] rounded bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/taskflow-about1/600/400)`,
              }}
            />
            <div
              className="absolute bottom-0 right-0 h-[300px] w-[60%] rounded bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/taskflow-about2/500/350)`,
              }}
            />
          </div>

          {/* Description + Accordion */}
          <div>
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[2px] text-gray-400">
              Welcome &amp; Introduce
            </span>
            <h3 className="mb-4 text-2xl font-bold text-black">Hola! my name is Louie Jie!</h3>
            <p className="mb-8 leading-relaxed">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came
              from it would have been rewritten a thousand times and everything that was left from
              its origin would be the word &quot;and&quot; and the Little Blind Text should turn
              around and return to its own, safe country.
            </p>

            {/* Accordion */}
            <div className="space-y-0 border-t border-gray-200">
              {panels.map((panel, idx) => {
                const isOpen = openIndex === idx
                return (
                  <div key={panel.title} className="border-b border-gray-200">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-left text-sm font-bold text-black"
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      aria-expanded={isOpen}
                    >
                      {panel.title}
                      {isOpen ? (
                        <ChevronUp size={16} className="text-brand-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        isOpen ? 'max-h-60 pb-4 opacity-100' : 'max-h-0 opacity-0',
                      )}
                    >
                      {panel.content}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
