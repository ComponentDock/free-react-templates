import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface AboutProps {
  className?: string
}

interface AccordionItem {
  title: string
  content: string
}

const accordionData: AccordionItem[] = [
  {
    title: 'Why choose me?',
    content:
      'I bring years of experience in design and development, delivering projects that combine aesthetic beauty with functional excellence.',
  },
  {
    title: 'What I do?',
    content:
      'I specialize in branding, web design, UI/UX, SEO, and front-end development — crafting digital experiences that resonate with audiences.',
  },
  {
    title: 'My Specialties',
    content:
      'My specialties include brand identity, responsive design, search engine optimization, and modern JavaScript frameworks.',
  },
]

export function About({ className }: AboutProps) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="about" className={cn('bg-white py-20', className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: images */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/about1/500/600"
              alt="Portfolio showcase 1"
              className="w-3/5 rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/about2/350/450"
              alt="Portfolio showcase 2"
              className="absolute bottom-0 right-0 w-3/5 rounded-lg object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Right: text + accordion */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Welcome & Introduce
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Hi! I&apos;m a Creative Designer
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              I&apos;m a passionate designer and developer dedicated to crafting beautiful,
              functional digital experiences. With a keen eye for detail and a love for clean code,
              I help brands tell their stories through compelling design.
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {accordionData.map((item, i) => (
                <div key={item.title} className="overflow-hidden rounded-lg border border-gray-200">
                  <button
                    type="button"
                    aria-expanded={i === openIndex}
                    aria-controls={`accordion-panel-${i}`}
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                    onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                  >
                    {item.title}
                    <span
                      className={cn(
                        'ml-2 text-lg transition-transform',
                        i === openIndex && 'rotate-45',
                      )}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {i === openIndex && (
                    <div
                      id={`accordion-panel-${i}`}
                      role="region"
                      className="px-5 pb-4 text-sm text-gray-600"
                    >
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
