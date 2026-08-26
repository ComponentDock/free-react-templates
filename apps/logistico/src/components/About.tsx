import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const accordionItems = [
  {
    title: 'Road Transport',
    content:
      'Our road transport network covers all major highways and secondary routes. We offer full truckload, less-than-truckload, and expedited delivery options with GPS tracking and delivery confirmations.',
  },
  {
    title: 'Sea Cargo',
    content:
      'From container shipping to bulk cargo, we handle all aspects of ocean freight. Our partnerships with major shipping lines ensure competitive rates and reliable transit times across global trade routes.',
  },
] as const

export function About() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold uppercase text-dark">
              A Professional
              <br />
              Transportation Business
            </h2>
            <p className="mb-6 leading-relaxed text-mist">
              With over a decade of experience in logistics and cargo transport, we deliver reliable
              solutions that keep your business moving. Our global network and local expertise
              ensure your shipments arrive safely and on time.
            </p>

            <div className="space-y-3">
              {accordionItems.map((item, i) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded border border-gray-100 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-bold text-dark transition-colors hover:bg-gray-50"
                    aria-expanded={openIndex === i}
                  >
                    {item.title}
                    {openIndex === i ? (
                      <ChevronUp className="h-5 w-5 text-brand" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-brand" aria-hidden="true" />
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-4 text-sm leading-relaxed text-mist">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/logistico-about/800/600"
              alt="Logistics operations"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 rounded bg-brand px-6 py-4 text-white shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
