import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    text: 'Alex delivered an outstanding website that exceeded our expectations. The attention to detail and creative vision was remarkable.',
    seed: 'lenscape-test-1',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupX',
    text: 'Working with Alex was a pleasure. The design was clean, modern, and perfectly aligned with our brand identity.',
    seed: 'lenscape-test-2',
  },
  {
    name: 'Emily Davis',
    role: 'Marketing Director, BrandCo',
    text: 'The results speak for themselves — our conversion rate increased by 40% after the redesign. Highly recommended!',
    seed: 'lenscape-test-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Happy Clients</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded bg-light-bg p-8">
              <Quote size={32} className="mb-4 text-gold" />
              <p className="mb-6 text-sm text-muted">{t.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/60/60`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="text-xs text-muted">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
