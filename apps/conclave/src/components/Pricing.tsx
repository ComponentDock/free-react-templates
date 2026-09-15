import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TICKETS } from '../data'

/* Pricing section: bg-gray #f7f7f7 with 3 pricing cards (Normal, Advance,
   Ultimate). Each card has a tier name, subtitle, price, feature list with
   check/close icons, and a "Buy Now" button. The Advance card is highlighted. */

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f7f7f7] py-[100px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p
            className="text-sm font-medium uppercase tracking-wider text-[#ea0763]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Choose a Ticket
          </p>
          <h2
            className="mt-3 text-3xl font-bold uppercase tracking-wide text-[#242424] md:text-[38px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Ticket Pricing
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
          {TICKETS.map((ticket) => (
            <article
              key={ticket.plan}
              aria-current={ticket.active ? 'true' : undefined}
              className={cn(
                'flex flex-col rounded-[10px] bg-white px-10 pb-10 transition-all hover:-translate-y-2.5',
                ticket.active
                  ? 'shadow-[0_25px_50px_rgba(0,0,0,0.25)] ring-2 ring-[#3b1d82]'
                  : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
              )}
            >
              <span className="-mx-10 inline-block self-center rounded-b-lg bg-[#3b1d82] px-[30px] py-3 text-[13px] font-semibold uppercase tracking-wider text-white">
                {ticket.plan}
              </span>
              <p className="mt-4 text-center text-sm text-[#797979]">{ticket.subtitle}</p>
              <h3
                className="mt-6 text-center text-5xl font-bold text-[#242424]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="align-top text-2xl font-semibold text-[#3b1d82]">$</span>
                {ticket.price}
              </h3>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center justify-center self-center rounded-[4px] border-2 border-[#3b1d82] px-8 py-2.5 text-sm font-medium uppercase tracking-wider text-[#3b1d82] transition-all hover:bg-[#3b1d82] hover:text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Buy Now
              </a>
              <ul className="mt-8 space-y-3">
                {ticket.features.map((feature) => (
                  <li
                    key={feature.text}
                    className="flex items-center gap-3 text-[15px] text-[#797979]"
                  >
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-[#3b1d82]" aria-hidden="true" />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-[#ea0763]" aria-hidden="true" />
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
