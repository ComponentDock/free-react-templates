import { Button } from '@free-react-templates/ui'
import { infoCards } from '../data'

export function InfoCards() {
  return (
    <section aria-label="Practice information" className="bg-mint-band">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:grid-cols-3 lg:px-8">
        {infoCards.map((card) => (
          <div key={card.heading} className="flex flex-col rounded-lg bg-white p-8 shadow-sm">
            {card.icon && <card.icon className="h-8 w-8 text-charcoal" aria-hidden="true" />}
            {card.phone && (
              <a
                href="tel:18006003800"
                className="mt-2 text-3xl font-bold tracking-tight text-charcoal transition-colors hover:text-mint"
              >
                {card.phone}
              </a>
            )}
            <h3 className="mt-3 text-lg font-bold uppercase tracking-wide text-charcoal">
              {card.heading}
            </h3>
            {card.body && <p className="mt-3 text-sm text-charcoal/80">{card.body}</p>}
            {card.hours && (
              <ul className="mt-3 space-y-1 text-sm text-charcoal/80">
                {card.hours.map((hours) => (
                  <li key={hours}>{hours}</li>
                ))}
              </ul>
            )}
            <Button
              variant="outline"
              className="mt-6 w-fit rounded-full border-charcoal/20 px-6 font-semibold text-charcoal hover:border-mint hover:bg-mint hover:text-white"
            >
              {card.buttonLabel}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
