import { ArrowRight } from 'lucide-react'

const sponsors = [
  { initial: 'L', name: 'LinearB', blurb: 'Engineering management platform' },
  { initial: 'N', name: 'Notion', blurb: 'All-in-one workspace' },
  { initial: 'V', name: 'Vercel', blurb: 'Frontend cloud platform' },
  { initial: 'L', name: 'Lemon.io', blurb: 'Hire vetted developers' },
]

export function Sponsors() {
  return (
    <section id="sponsors" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            Our Sponsors
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proudly Supported By
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            These amazing companies help keep the show running every single week.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor) => (
            <li
              key={sponsor.name}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-gray-700"
            >
              <span
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-800 text-2xl font-bold text-white"
                aria-hidden="true"
              >
                {sponsor.initial}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{sponsor.name}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-400">{sponsor.blurb}</p>
              <a
                href="#sponsors"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-gray-400">
          Want to sponsor the show?{' '}
          <a
            href="#contact"
            className="font-medium text-primary-400 transition-colors hover:text-primary-300"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  )
}
