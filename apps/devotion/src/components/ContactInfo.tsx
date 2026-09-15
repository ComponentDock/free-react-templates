import { MapPin, Clock, MessageCircle } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    title: 'Location',
    lines: ['New York - 2398', '10 Hadson Carl Street'],
  },
  {
    icon: Clock,
    title: 'Service Times',
    lines: [
      'Wednesdays at 6:30PM - 7:30PM',
      'Fridays at Sunset - 7:30PM',
      'Saturdays at 8:00AM - Sunset',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Get In Touch',
    lines: ['Email: info@yoursite.com', 'Phone: (123) 3240-345-9348'],
  },
] as const

export function ContactInfo() {
  return (
    <section className="bg-navy py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 text-center sm:grid-cols-3">
        {info.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title}>
              <Icon className="mx-auto mb-3 h-8 w-8 text-white" />
              <h3 className="mb-2 font-amatic text-2xl font-bold text-white">{item.title}</h3>
              <p className="text-sm text-white/80">
                {item.lines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < item.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
