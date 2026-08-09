import { Play } from 'lucide-react'
import { Reveal } from './Reveal'

const episodes = [
  {
    number: 'EP.247',
    meta: 'Feb 18, 2026 · 58 min',
    title: 'Building a $100M Company with No Funding',
    guest: 'Sarah Chen, Founder of TechFlow',
    blurb: 'Bootstrapping a nine-figure business with zero venture funding.',
  },
  {
    number: 'EP.246',
    meta: 'Feb 11, 2026 · 46 min',
    title: 'The Art of Product-Market Fit',
    guest: 'James Park, Founder of FitSync',
    blurb: 'How FitSync found its wedge and grew into a category leader.',
  },
  {
    number: 'EP.245',
    meta: 'Feb 4, 2026 · 52 min',
    title: 'From Side Project to IPO',
    guest: 'Maria Santos, CEO of CloudWeave',
    blurb: 'The improbable journey of CloudWeave from hobby to public markets.',
  },
  {
    number: 'EP.244',
    meta: 'Jan 28, 2026 · 49 min',
    title: 'Remote Teams That Actually Work',
    guest: 'David Kim, Founder of Nomad',
    blurb: 'Building async-first culture across 30+ countries and time zones.',
  },
  {
    number: 'EP.243',
    meta: 'Jan 21, 2026 · 55 min',
    title: 'The Future of AI in Business',
    guest: 'Lisa Wang, CEO of DeepTech',
    blurb: 'Where applied AI creates durable advantage — and where it does not.',
  },
  {
    number: 'EP.242',
    meta: 'Jan 14, 2026 · 44 min',
    title: 'Scaling Culture at Hypergrowth',
    guest: 'Tom Russo, CEO of RocketScale',
    blurb: 'Keeping values intact when your team doubles every six months.',
  },
] as const

export function Episodes() {
  return (
    <section id="episodes" className="bg-gray-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-500">
            Episodes
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Recent Episodes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-400">
            Catch up on the latest conversations with the builders, operators, and investors shaping
            what&rsquo;s next.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, index) => (
            <Reveal key={episode.number} delay={index * 60}>
              <article
                data-testid="episode-card"
                className={`flex h-full flex-col rounded-2xl border border-gray-800 p-6 ${
                  index % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-950'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-primary-500">{episode.number}</span>
                  <span className="text-xs font-medium text-gray-500">{episode.meta}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white">{episode.title}</h3>
                <p className="mt-1.5 text-sm font-semibold text-gray-400">{episode.guest}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">{episode.blurb}</p>
                <button
                  type="button"
                  aria-label="Play episode"
                  className="mt-5 flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-gray-800 text-white transition-colors hover:bg-primary-600 hover:border-primary-600"
                >
                  <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#episodes"
            className="inline-block rounded-full border border-gray-700 bg-gray-800/50 px-6 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-800"
          >
            View All Episodes
          </a>
        </div>
      </div>
    </section>
  )
}
