import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronDown } from 'lucide-react'

interface Question {
  question: string
  answer: string
}

const QUESTIONS: Question[] = [
  {
    question: "Why can't people connect to the web server on my PC?",
    answer:
      'A home connection usually blocks incoming traffic and changes address. A site on our servers gets a fixed address and stays online around the clock.',
  },
  {
    question: 'What domain name should I choose for my site?',
    answer:
      'Pick something short that is easy to spell and to say out loud. A .com suits most sites; a country ending works well for a local business.',
  },
  {
    question: 'How can I make my website work without www. in front?',
    answer:
      'Point the bare domain at your site in the control panel DNS settings. We set up both versions with a redirect to the one you prefer.',
  },
  {
    question: 'Why does Internet Information Server want a password?',
    answer:
      'The server asks when a folder is protected or its permissions are too strict. Check the folder in your control panel, or ask our team.',
  },
]

/** Dark FAQ band: a single-open accordion over the three shared hosting answers. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-shell py-24">
      <div className="mx-auto max-w-[900px] px-4">
        <h2 className="font-heading text-center text-3xl font-bold text-white sm:text-4xl">
          Frequently ask questions
        </h2>

        <ul className="mt-14 space-y-4">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <li key={item.question} className="overflow-hidden rounded-lg bg-white/5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="font-heading flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:outline-none"
                >
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      'h-5 w-5 shrink-0 text-accent transition-transform',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                {isOpen ? (
                  <div id={`faq-panel-${index}`} role="region" aria-label={item.question}>
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
