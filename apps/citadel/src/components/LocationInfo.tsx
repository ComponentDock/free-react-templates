import { MapPin, Clock, Mail } from 'lucide-react'

const infoCards = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['127 Manchester City, London', '86/A Green Street, California, USA'],
    link: 'Get Direction',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    lines: ['Mon–Fri (9:00–19:00)', 'Sat–Sun (Closed)'],
    link: null,
  },
  {
    icon: Mail,
    title: 'Drop a Message',
    lines: ['support@citadel.com', '456-267-3572'],
    link: 'Mail Us',
  },
]

export function LocationInfo() {
  return (
    <section className="bg-ink py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <card.icon size={28} className="text-brand" />
              </div>
              <h3 className="mb-4 text-xl font-medium text-white">{card.title}</h3>
              {card.lines.map((line) => (
                <p key={line} className="text-base font-light leading-relaxed text-gray-400">
                  {line}
                </p>
              ))}
              {card.link && (
                <a
                  href="#"
                  className="mt-4 inline-block text-base font-normal text-brand underline transition-colors hover:text-white"
                >
                  {card.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
