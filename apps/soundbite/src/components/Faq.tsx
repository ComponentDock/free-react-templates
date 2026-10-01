import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How can I be a guest on the show?',
    a: "We're always looking for interesting guests. Send a pitch through the contact form with your expertise, social profiles, and why you'd be a great fit. Every submission is reviewed and answered within two weeks.",
  },
  {
    q: 'How often do you release new episodes?',
    a: 'New episodes land every Tuesday, with bonus drops at weekends. Subscribe to the newsletter so you never miss a release and get the behind-the-scenes notes too.',
  },
  {
    q: 'Where can I listen?',
    a: 'Find us on Apple Podcasts, Spotify, Google Podcasts, YouTube, and Amazon Music — or stream directly from this page with full show notes and transcripts.',
  },
  {
    q: 'Do you offer sponsorship opportunities?',
    a: 'Yes — pre-roll, mid-roll, and post-roll slots, plus dedicated episodes and newsletter features. Get in touch for the media kit with audience demographics and pricing.',
  },
  {
    q: 'Can I suggest a topic?',
    a: 'Please do! Many of our most popular episodes came straight from listener suggestions. Send ideas through the contact form or DM us on social media.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  function toggle(i: number) {
    setOpen((current) => (current === i ? null : i))
  }

  return (
    <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Answers about the podcast, guest appearances, and sponsorships.
          </p>
        </div>

        <div className="mt-12 divide-y divide-gray-800 border-y border-gray-800">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-800 text-gray-400">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-answer-${i}`} className="pb-5 pr-12 text-gray-400">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
