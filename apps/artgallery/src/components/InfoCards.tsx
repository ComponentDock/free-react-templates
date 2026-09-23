import { Clock, Rocket, Calendar } from 'lucide-react'

const CARDS = [
  {
    icon: Clock,
    title: 'Opening Hours',
    details: [
      'Monday — Friday: 9:00 AM — 6:00 PM',
      'Saturday: 10:00 AM — 4:00 PM',
      'Sunday: Closed',
    ],
  },
  {
    icon: Rocket,
    title: 'Ongoing Exhibitions',
    details: [
      'Modern Art Showcase — Gallery A',
      'Sculpture Garden — Outdoor Wing',
      'Photography Retrospective — Room 3',
    ],
  },
  {
    icon: Calendar,
    title: 'Opening Events',
    details: [
      'Grand Opening Gala — Feb 21',
      'Artist Meet & Greet — Feb 22',
      'Guided Tour — Every Saturday',
    ],
  },
]

export function InfoCards() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className="rounded-lg bg-light-bg p-8 text-center">
            <card.icon className="mx-auto mb-4 h-10 w-10 text-accent" />
            <h3 className="mb-3 text-xl font-semibold text-navy">{card.title}</h3>
            <ul className="space-y-1 text-sm text-muted">
              {card.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
