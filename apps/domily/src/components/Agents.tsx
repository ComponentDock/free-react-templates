import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AGENTS } from '../data'
import { FacebookIcon, GlobeIcon, XIcon } from './icons'

const VISIBLE = 3

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: XIcon },
  { label: 'Website', Icon: GlobeIcon },
] as const

export function Agents() {
  const [index, setIndex] = useState(0)
  const maxIndex = AGENTS.items.length - VISIBLE

  const next = () => setIndex((current) => (current + 1) % (maxIndex + 1))
  const prev = () => setIndex((current) => (current - 1 + maxIndex + 1) % (maxIndex + 1))

  return (
    <section className="bg-white px-4 py-[100px] pb-[90px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[60px] text-center">
          <h2 className="font-display text-[36px] font-semibold text-navy-ink">{AGENTS.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-[#5E5E5E]">
            {AGENTS.subtitle}
          </p>
        </div>

        <div className="relative">
          <div
            data-testid="agents-track"
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {AGENTS.items.map((agent) => (
              <div key={agent.name} className="w-full shrink-0 px-3 text-center md:w-1/3">
                <div className="relative mx-auto w-fit">
                  <img
                    src={agent.avatar}
                    alt={`${agent.name} portrait`}
                    className="size-[260px] object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-navy-ink/40 py-3">
                    {SOCIALS.map(({ label, Icon }) => (
                      <button
                        key={label}
                        type="button"
                        aria-label={`${agent.name} on ${label}`}
                        className="flex size-10 items-center justify-center rounded-full bg-teambg text-white transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Icon className="size-4" />
                      </button>
                    ))}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy-ink">
                  {agent.name}
                </h3>
                <p className="mt-1 text-sm text-[#57667e]">{agent.role}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous agents"
            className="absolute -left-5 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-none border border-cardborder bg-white text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:flex"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next agents"
            className="absolute -right-5 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-none border border-cardborder bg-white text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:flex"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
