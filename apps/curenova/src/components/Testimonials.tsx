import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Peterson',
    role: 'Patient',
    quote:
      'CureNova provided exceptional care during my treatment. The doctors were professional and the staff was incredibly supportive.',
    avatar: 'https://picsum.photos/seed/curenova-av1/100/100',
  },
  {
    name: 'Maria Santos',
    role: 'Patient',
    quote:
      'I felt truly cared for from the moment I walked in. The modern facilities and compassionate team made all the difference.',
    avatar: 'https://picsum.photos/seed/curenova-av2/100/100',
  },
  {
    name: 'David Kim',
    role: 'Patient',
    quote:
      'Outstanding medical expertise combined with genuine warmth. I would highly recommend CureNova to anyone seeking quality healthcare.',
    avatar: 'https://picsum.photos/seed/curenova-av3/100/100',
  },
  {
    name: 'Rachel Johnson',
    role: 'Patient',
    quote:
      'From the diagnosis to the treatment plan, everything was handled with utmost professionalism. Truly a five-star experience.',
    avatar: 'https://picsum.photos/seed/curenova-av4/100/100',
  },
] as const

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink-900">
          Our patients and their opinions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-gray-100 p-6">
              <Stars />
              <p className="mb-4 text-sm text-mute-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-mute-600">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
