import { Clock, Calendar, AlertTriangle } from 'lucide-react'

const boxes = [
  {
    icon: Clock,
    title: 'Working Hours',
    text: 'Monday - Friday: 8:00 AM - 6:00 PM. Saturday: 9:00 AM - 2:00 PM. Sunday: Closed.',
  },
  {
    icon: Calendar,
    title: 'Appointments',
    text: 'Book your appointment online or call us. We recommend scheduling at least 24 hours in advance.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Cases',
    text: 'For emergencies, call us directly at +563 47558 623. Available 24/7 for urgent care.',
  },
]

export function InfoBoxes() {
  return (
    <section className="bg-brand-green py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div key={box.title} className="bg-white rounded-lg p-6 text-center">
              <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <box.icon className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="text-lg font-bold text-dark-text mb-3">{box.title}</h3>
              <p className="text-body text-sm leading-relaxed">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
