import { Phone, Mail, MapPin } from 'lucide-react'

const cards = [
  { icon: Phone, text: '(+00) 1234 5678', bg: 'bg-card-blue' },
  { icon: Mail, text: 'info@email.com', bg: 'bg-card-green' },
  {
    icon: MapPin,
    text: '203 Fake St. Mountain View, San Francisco, California, USA',
    bg: 'bg-card-orange',
  },
] as const

export function ContactCards() {
  return (
    <section className="bg-section-bg py-8" aria-label="Contact information">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.text}
              className={`${card.bg} flex items-center justify-center rounded-lg py-6 text-center`}
            >
              <div className="flex flex-col items-center gap-3">
                <card.icon className="h-8 w-8 text-white" aria-hidden="true" />
                <span className="text-sm font-medium text-white">{card.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
