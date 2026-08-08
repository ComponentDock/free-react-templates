import { Quote } from 'lucide-react'

const quotes = [
  { name: 'Alan Crew', role: 'Partner at XYZ Co.' },
  { name: 'Jean Doe', role: 'Partner at XYZ Co.' },
  { name: 'Jessica Smith', role: 'Founder at Smith & Sons' },
  { name: 'Ben Miller', role: 'CEO at Miller Group' },
] as const

export function Testimonials() {
  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Testimonials</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            People Says
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {quotes.map(({ name, role }) => (
            <figure
              key={name}
              className="rounded-[5px] border border-black/5 bg-paper p-8 dark:border-white/10 dark:bg-gray-900"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <blockquote className="mt-4 leading-relaxed text-mist dark:text-gray-400">
                “Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
                at the coast of the Semantics, a large language ocean.”
              </blockquote>
              <figcaption className="mt-6">
                <h3 className="font-display text-base font-bold uppercase text-ink dark:text-white">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-mist dark:text-gray-400">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
