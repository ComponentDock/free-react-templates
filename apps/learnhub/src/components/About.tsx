import { Pencil, Ruler } from 'lucide-react'

const bullets = [
  {
    icon: Pencil,
    text: 'Hands-on projects reviewed by industry mentors',
  },
  {
    icon: Ruler,
    text: 'Industry-recognized certificates upon completion',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/learnhub-about/700/500"
              alt="Students engaged in interactive online learning"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-coral-500">
              About us
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 md:text-4xl">
              Learn Skills That Matter for Your Career
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              Our project-based curriculum is designed with input from hiring managers at top
              companies. Every course focuses on practical skills you can apply immediately on the
              job.
            </p>
            <ul className="mt-6 space-y-4">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-coral-500/10 text-coral-500">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-gray-600">{b.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#courses"
              className="mt-8 inline-block rounded-full bg-gradient-to-r from-coral-500 to-gold-400 px-7 py-2.5 font-heading text-sm font-semibold text-white shadow transition hover:shadow-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
