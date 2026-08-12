import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PILL, TICKETS } from '../data'

/* Ticket pricing recreated from the source's ticket-pricing area: three
   white cards over the gradient overlay, each with a gradient plan label,
   a large price, a per-person note and a feature list; the Full Pass card
   is highlighted as active. */

export function TicketPricing() {
  return (
    <section id="tickets" className="relative overflow-hidden py-[100px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/summit-hall/1920/1080)' }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-overlay" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-white">Choose a Ticket</p>
          <h4 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white md:text-[38px]">
            Ticket Pricing
          </h4>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
          {TICKETS.map((ticket) => (
            <article
              key={ticket.plan}
              aria-current={ticket.active ? 'true' : undefined}
              className={cn(
                'flex flex-col rounded-[10px] bg-white px-10 pb-10 transition-all hover:-translate-y-2.5',
                ticket.active
                  ? 'shadow-[0_25px_50px_rgba(0,0,0,0.25)]'
                  : 'shadow-[0_10px_30px_rgba(0,0,0,0.1)]',
              )}
            >
              <span className="-mx-10 inline-block self-center rounded-b-lg bg-brand-gradient px-[30px] py-3 text-[13px] font-semibold uppercase tracking-wider text-white">
                {ticket.plan}
              </span>
              <h2 className="mt-8 text-center text-6xl font-bold text-navy-deep">
                <span className="align-top text-2xl font-semibold text-tab-active">$</span>
                {ticket.price}
              </h2>
              <p className="mt-1 text-center text-sm text-muted">{ticket.priceNote}</p>
              <a href="#tickets" className={`${PILL} mt-6 self-center`}>
                Get Tickets
              </a>
              <ul className="mt-8 space-y-3">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[15px] text-gray-600">
                    <Check className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
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
