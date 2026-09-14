import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Daniel Hart',
    role: 'Project Manager, Nestle',
    text: 'Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made.',
    seed: 'expedio-avatar-1',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Director, Wanderlust Co',
    text: 'A wonderful experience from start to finish. The itinerary was perfectly crafted and every destination exceeded our expectations.',
    seed: 'expedio-avatar-2',
  },
  {
    name: 'James Cooper',
    role: 'CEO, TravelNow',
    text: 'Professional, organized, and truly attentive to detail. Every moment of our trip felt special and well-planned.',
    seed: 'expedio-avatar-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-mist py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">Our client says</h2>
          <p className="mt-3 text-sm text-smoke">
            Fowl have fruit moveth male they are that place you will lesser
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl bg-white p-8 shadow-sm">
              <Quote size={24} className="absolute right-6 top-6 text-primary-100" />
              <div className="mb-4 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-ink">{t.name}</h4>
                  <p className="text-xs text-smoke">{t.role}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ash">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
