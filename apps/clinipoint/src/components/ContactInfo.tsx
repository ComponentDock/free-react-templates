import { Clock, Phone, MapPin } from 'lucide-react'

const CONTACT_CARDS = [
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday - Friday 08:00 - 21:00', 'Saturday and Sunday - CLOSED'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 234 567 890', '+1 234 567 891'],
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['123 Medical Center Drive', 'New York, NY 10001'],
  },
]

export default function ContactInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <card.icon className="text-brand-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-brand-heading mb-3">
                {card.title}
              </h3>
              {card.lines.map((line, i) => (
                <p key={i} className="text-brand-body text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
