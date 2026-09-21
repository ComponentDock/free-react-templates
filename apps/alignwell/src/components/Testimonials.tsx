import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The team at AlignWell completely changed my life. After years of back pain, I finally found relief through their expert chiropractic care.',
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    avatar: 'https://picsum.photos/seed/alignwell-person1/100/100',
  },
  {
    quote:
      'Professional, caring, and truly knowledgeable. I recommend AlignWell to anyone looking for quality chiropractic treatment.',
    name: 'James Cooper',
    role: 'Software Engineer',
    avatar: 'https://picsum.photos/seed/alignwell-person2/100/100',
  },
  {
    quote:
      'From the first visit, I knew I was in good hands. The personalized treatment plan made all the difference in my recovery.',
    name: 'Emily Chen',
    role: 'Fitness Instructor',
    avatar: 'https://picsum.photos/seed/alignwell-person3/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-ink py-20 dark:bg-ink-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Testimonies
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white">Happy Clients & Feedbacks</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-gray-800/50 p-8 backdrop-blur">
              <Quote className="mb-4 h-8 w-8 text-brand" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-gray-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
