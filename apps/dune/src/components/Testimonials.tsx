import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Daniel Heart',
    role: 'Project Manager, Nestle',
    text: 'Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they are blessed.',
    seed: 'dune-testimonial-1',
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director, Google',
    text: 'An incredible experience from start to finish. The travel packages were perfectly curated and every detail was taken care of. Highly recommended!',
    seed: 'dune-testimonial-2',
  },
  {
    name: 'James Cooper',
    role: 'Entrepreneur, Tech Startup',
    text: 'The best travel agency we have worked with. Professional service, amazing destinations, and memories that will last a lifetime.',
    seed: 'dune-testimonial-3',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our client says
          </h2>
          <p className="mx-auto mt-4 max-w-md text-gray-500 dark:text-gray-400">
            Hear what our satisfied travelers have to say about their experiences.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 transition-colors hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <Quote className="mb-4 h-6 w-6 text-brand" aria-hidden="true" />
              <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t.text}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/60/60`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
