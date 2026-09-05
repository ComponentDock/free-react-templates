import { Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Great explorer of the truth, the master builder of human happiness. No one rejects, dislikes, or avoids pleasure because it is pleasure.',
    name: 'Landy Drammer',
    location: 'Newyork City',
  },
  {
    text: 'Great explorer of the truth, the master builder of human happiness. No one rejects, dislikes, or avoids pleasure because it is pleasure.',
    name: 'Alex Smit',
    location: 'London',
  },
  {
    text: 'Great explorer of the truth, the master builder of human happiness. No one rejects, dislikes, or avoids pleasure because it is pleasure.',
    name: 'Jony Andarson',
    location: 'USA',
  },
]

export function Testimonials() {
  return (
    <section
      className="bg-cover bg-fixed bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/structura-test/1600/800)' }}
    >
      <div className="bg-charcoal/80 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Customer Feedback</h2>
            <p className="mt-3 text-white/60">
              A wall for our project glory and a place to find more
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded bg-white/10 p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-lime-accent text-lime-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/80">{t.text}</p>
                <div className="mt-6">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <span className="text-xs text-white/50">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
