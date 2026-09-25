import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: 'An absolutely captivating read from start to finish. The author masterfully weaves mystery and emotion into every page.',
    name: 'Sarah Mitchell',
    role: 'Literary Reviewer',
    seed: 'quill-person-1',
  },
  {
    text: 'This book redefines what modern fiction can be. Bold, beautiful, and utterly unforgettable.',
    name: 'James Porter',
    role: 'Book Club President',
    seed: 'quill-person-2',
  },
  {
    text: "I couldn't put it down. The pacing is perfect and the characters feel like old friends by the final chapter.",
    name: 'Elena Rodriguez',
    role: 'Avid Reader',
    seed: 'quill-person-3',
  },
]

export function Testimonials() {
  return (
    <section id="reviews" aria-label="Testimonials" className="relative bg-navy py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/quill-bg/1920/800)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-white/60">
            Testimonials
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Kind Words From Readers
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white/10 p-8 backdrop-blur-sm">
              <Quote className="h-8 w-8 text-accent-400" />
              <p className="mt-4 text-sm leading-relaxed text-white/80">{t.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/64/64`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
