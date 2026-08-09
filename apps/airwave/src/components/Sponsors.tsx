import { BarChart3, Blocks, Cloud, Handshake, Users } from 'lucide-react'
import { Reveal } from './Reveal'

const sponsors = [
  {
    name: 'LinearB',
    tagline: 'Engineering management platform',
    Icon: BarChart3,
  },
  {
    name: 'Notion',
    tagline: 'All-in-one workspace',
    Icon: Blocks,
  },
  {
    name: 'Vercel',
    tagline: 'Frontend cloud platform',
    Icon: Cloud,
  },
  {
    name: 'Lemon.io',
    tagline: 'Hire vetted developers',
    Icon: Users,
  },
] as const

export function Sponsors() {
  return (
    <section id="sponsors" className="bg-gray-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-500">
            Sponsors
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Proudly Supported By
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-400">
            These amazing companies make the show possible.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor, index) => (
            <Reveal key={sponsor.name} delay={index * 60}>
              <div
                data-testid="sponsor-card"
                className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900/60 text-primary-400">
                  <sponsor.Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{sponsor.name}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{sponsor.tagline}</p>
                <a
                  href="#sponsors"
                  className="mt-4 inline-block text-sm font-semibold text-primary-500 transition-colors hover:text-primary-400"
                >
                  Learn More
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-gray-800 bg-gray-900/50 px-8 py-6 sm:flex-row">
            <Handshake className="h-6 w-6 text-primary-500" aria-hidden="true" />
            <p className="text-base font-semibold text-white">Want to sponsor the show?</p>
            <a
              href="#contact"
              className="text-sm font-semibold text-primary-500 transition-colors hover:text-primary-400"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
