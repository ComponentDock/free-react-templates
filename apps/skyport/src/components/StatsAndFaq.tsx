import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../lib/prefers-reduced-motion'

const STATS = [
  { value: 1284, label: 'Projects Completed' },
  { value: 762, label: 'New Projects' },
  { value: 2318, label: 'Tickets Submitted' },
  { value: 4120, label: 'Cup of Coffee' },
]

const FAQS = [
  {
    question: 'Are your templates responsive?',
    answer:
      'Every layout reflows from a wide desktop down to the smallest phone, and each grid, split and band was measured at four widths before it shipped.',
  },
  {
    question: 'Does it have all the plugins as mentioned?',
    answer:
      'Everything the design needs is bundled in — sliders, counters, dropdowns and form validation are written in plain React with no external plugin layer.',
  },
  {
    question: 'Can I use the theme for my client?',
    answer:
      'Yes. Take a plan, adapt the copy and palette, and hand the build over to your client under your own project name.',
  },
]

/** Milliseconds between ticks while a counter animates up to its value. */
const TICK_MS = 25

function StatCounter({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? value : 0))

  useEffect(() => {
    if (prefersReducedMotion()) {
      return
    }
    const step = Math.max(1, Math.ceil(value / 40))
    let current = 0
    const timer = window.setInterval(() => {
      current = Math.min(value, current + step)
      setDisplay(current)
      if (current >= value) {
        window.clearInterval(timer)
      }
    }, TICK_MS)
    return () => window.clearInterval(timer)
  }, [value])

  return (
    <div className="mb-[26px]">
      <h2 className="font-heading text-[48px] font-bold text-brand">{display}</h2>
      <p className="text-[14px] font-light text-ink">{label}</p>
    </div>
  )
}

/**
 * The counter + Q/A band: four facts that count up on first paint (jumping
 * straight to their figure when the visitor prefers reduced motion) beside three
 * question/answer pairs.
 */
export function StatsAndFaq() {
  return (
    <section id="faq" className="scroll-mt-[108px] bg-surface py-[120px]">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mx-auto max-w-[700px] pb-[40px] text-center">
          <h1 className="font-heading text-[36px] font-semibold text-ink">
            Cloud Hosting, Answered
          </h1>
          <p className="text-copy">Numbers our customers ask about before they sign up.</p>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:w-3/12 lg:text-right">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="lg:w-9/12">
            {FAQS.map((faq) => (
              <div key={faq.question} className="mb-[30px]">
                <h2 className="font-heading mt-[15px] mb-[25px] text-[18px] font-semibold text-ink">
                  {faq.question}
                </h2>
                <p className="text-[16px] leading-[24px] font-light text-copy">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
