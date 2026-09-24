import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'The care I received was exceptional. The doctors and nurses were attentive, kind, and professional throughout my stay.',
    name: 'Sarah Mitchell',
    role: 'Patient',
  },
  {
    quote:
      'I was impressed by the state-of-the-art facilities and the expertise of the medical staff. Truly a world-class experience.',
    name: 'Robert Chen',
    role: 'Patient',
  },
  {
    quote:
      'From the moment I arrived, I felt well taken care of. The team explained everything clearly and made me feel at ease.',
    name: 'Emily Larson',
    role: 'Patient',
  },
] as const

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What Client Says
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            <span className="text-brand">Happy</span> Patients
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-brand/30" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink dark:text-white">{t.name}</p>
                  <p className="text-xs text-mist dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
