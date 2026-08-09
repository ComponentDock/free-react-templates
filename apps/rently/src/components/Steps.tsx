import { BadgeDollarSign, CalendarCheck, KeyRound, MapPin } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const steps = [
  {
    title: 'Better Way to Rent Your Perfect Cars',
    icon: KeyRound,
    blurb: 'Start your trip with a car that matches your style and budget.',
  },
  {
    title: 'Choose Your Pickup Location',
    icon: MapPin,
    blurb: 'Pick the city, airport, or station where your journey begins.',
  },
  {
    title: 'Select the Best Deal',
    icon: BadgeDollarSign,
    blurb: 'Compare transparent daily rates and choose the offer you love.',
  },
  {
    title: 'Reserve Your Rental Car',
    icon: CalendarCheck,
    blurb: 'Lock in your reservation in seconds and get ready to drive.',
  },
] as const

export function Steps() {
  return (
    <section id="steps" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">Rent a car</span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Make your trip
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <step.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-accent">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.blurb}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">Reserve Your Perfect Car</Button>
        </div>
      </div>
    </section>
  )
}
