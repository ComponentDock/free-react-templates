import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Supply Chain Manager',
    quote:
      'Logistico has transformed our shipping operations. Their reliable service and real-time tracking give us complete peace of mind.',
  },
  {
    name: 'Michael Chen',
    role: 'Import/Export Director',
    quote:
      'Outstanding customer support and competitive rates. We have been using their sea cargo services for over three years with zero issues.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Lead',
    quote:
      'The dashboard makes managing shipments incredibly simple. We reduced our logistics costs by 20% within the first quarter.',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-dark">Client Testimonials</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Hear from businesses that trust Logistico for their logistics needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mb-6 text-sm leading-relaxed text-mist">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/logistico-${t.name.split(' ')[0]!.toLowerCase()}/100/100`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-bold text-dark">{t.name}</div>
                  <div className="text-xs text-mist">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
