import { useState } from 'react'
import { Play, ChevronDown, ChevronUp } from 'lucide-react'

const accordionItems = [
  {
    variant: 'Success',
    title: 'Success Feedback',
    content:
      'Our community programs have reached thousands of families, providing essential services and support where it is needed most.',
    color: 'bg-green-500',
  },
  {
    variant: 'Info',
    title: 'Info Feedback',
    content:
      'Stay informed about upcoming events, policy updates, and opportunities to get involved in your local community.',
    color: 'bg-blue-500',
  },
  {
    variant: 'Danger',
    title: 'Danger Feedback',
    content:
      'We must act now to address critical issues facing our nation. Delayed action only makes the problems harder to solve.',
    color: 'bg-red-500',
  },
  {
    variant: 'Warning',
    title: 'Warning Feedback',
    content:
      'Be vigilant against misinformation. Always verify your sources and rely on trusted channels for political news.',
    color: 'bg-yellow-500',
  },
] as const

export function Feedback() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">What People Say About Us</h2>
          <div className="mt-8 space-y-3">
            {accordionItems.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={item.variant}
                  className="rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-3 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`h-3 w-3 shrink-0 rounded-full ${item.color}`}
                      aria-hidden="true"
                    />
                    <span className="flex-1 font-semibold text-ink">{item.title}</span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-mist" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-mist" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-sm leading-relaxed text-mist">
                      {item.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://picsum.photos/seed/civicpulse-feedback/600/400"
              alt="Party video thumbnail"
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <a
            href="#video"
            aria-label="Play video"
            className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-110"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
