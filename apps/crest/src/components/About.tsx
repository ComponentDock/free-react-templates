import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const ACCORDION_ITEMS = [
  {
    title: 'Starts the automated process.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'The automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'Automated process starts.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
  {
    title: 'Process the automated magic.',
    content:
      'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare.',
  },
]

export function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section id="about" className="bg-light-gray py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/crest-about/600/500"
            alt="About Crest"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="mb-4 text-[44px] font-bold leading-[1.4] text-navy">
            Flexible support to suit your business needs
          </h2>
          <p className="mb-8 text-navy-gray">
            Apply for a business loan today and, if approved, you could enjoy the first 8 weeks with
            no repayments. Get the breathing space now, and we&apos;ll extend your term at the other
            end (interest will accrue from the settlement date to the end of the term).
          </p>
          <div className="space-y-3">
            {ACCORDION_ITEMS.map((item, index) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-navy"
                  aria-expanded={openIndex === index}
                >
                  {item.title}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && <p className="px-6 pb-4 text-navy-gray">{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
