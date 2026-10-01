import { ArrowRight, Clock, Play } from 'lucide-react'

interface Episode {
  ep: string
  date: string
  duration: string
  title: string
  guest: string
  blurb: string
}

const featured = {
  ep: 'EP. 247',
  date: 'Feb 18, 2026',
  duration: '58 min',
  title: 'The Zero-to-$100M Blueprint',
  guest: 'Nadia Reyes, Founder of Stackline',
  description:
    'Nadia Reyes bootstrapped Stackline from a weekend prototype into a nine-figure business without raising a dollar of venture capital. In this episode she breaks down her unconventional growth engine, the decisions that shaped the journey, and why she believes bootstrapped founders own the next decade.',
  tags: ['Startup', 'Bootstrapping', 'Growth'],
}

const episodes: Episode[] = [
  {
    ep: 'EP.247',
    date: 'Feb 18, 2026',
    duration: '58 min',
    title: 'The Zero-to-$100M Blueprint',
    guest: 'Nadia Reyes, Founder of Stackline',
    blurb: 'How Nadia grew Stackline to nine figures with zero outside funding.',
  },
  {
    ep: 'EP.246',
    date: 'Feb 11, 2026',
    duration: '45 min',
    title: 'Finding Product-Market Fit in 90 Days',
    guest: 'Omar Haddad, CEO of Fitloop',
    blurb: 'The exact framework Fitloop used to lock in product-market fit in one quarter.',
  },
  {
    ep: 'EP.245',
    date: 'Feb 4, 2026',
    duration: '62 min',
    title: 'From Weekend Project to Public Company',
    guest: 'Lucia Moreno, Founder of Cloudpeak',
    blurb: 'Lucia recounts the wild ride from a Saturday hack to a public listing.',
  },
  {
    ep: 'EP.244',
    date: 'Jan 28, 2026',
    duration: '51 min',
    title: 'Remote Teams That Actually Deliver',
    guest: 'David Osei, Head of Remote at Nomadic',
    blurb: 'A field-tested playbook for high-performing distributed teams across time zones.',
  },
  {
    ep: 'EP.243',
    date: 'Jan 21, 2026',
    duration: '55 min',
    title: 'AI Is Reshaping Operations — Here’s How',
    guest: 'Priya Nair, AI Lead at Deepforge',
    blurb: 'What every founder needs to know about AI-driven operations right now.',
  },
  {
    ep: 'EP.242',
    date: 'Jan 14, 2026',
    duration: '48 min',
    title: 'Scaling Culture From 10 to 1,000',
    guest: 'Alex Novak, VP People at Rocketrise',
    blurb: 'Keeping a company culture intact while headcount multiplies tenfold.',
  },
]

export function Episodes() {
  return (
    <section id="episodes" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50">
            <img
              src="https://picsum.photos/seed/soundbite-featured/800/520"
              alt="Featured episode artwork"
              className="h-64 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-950/40">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-600/40"
                aria-hidden="true"
              >
                <Play className="ml-1 h-6 w-6 text-white" fill="white" />
              </span>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
              Latest Episode
            </span>
            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
              <span className="font-semibold text-white">{featured.ep}</span>
              <span>{featured.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {featured.duration}
              </span>
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">{featured.title}</h2>
            <p className="mt-2 text-sm font-medium text-accent-400">with {featured.guest}</p>
            <p className="mt-4 leading-relaxed text-gray-400">{featured.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#episodes"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-500"
            >
              <Play className="h-4 w-4" fill="white" aria-hidden="true" />
              Play Episode
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <span className="inline-flex items-center rounded-full bg-primary-600/15 px-3 py-1 text-xs font-medium tracking-wide text-primary-300">
            Episodes
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recent Episodes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Catch up on the latest conversations with founders, creators, and innovators.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode, i) => (
            <li
              key={episode.ep}
              className="flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6 transition-colors hover:border-gray-700"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={`https://picsum.photos/seed/soundbite-ep-${i + 1}/640/360`}
                  alt=""
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gray-950/80 px-2.5 py-1 text-xs font-semibold text-white">
                  {episode.ep}
                </span>
              </div>
              <p className="flex flex-wrap items-center gap-x-2 text-xs text-gray-500">
                <span>{episode.date}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {episode.duration}
                </span>
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{episode.title}</h3>
              <p className="mt-1 text-sm text-accent-400">{episode.guest}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{episode.blurb}</p>
              <a
                href="#episodes"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
              >
                Listen
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="#episodes"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-8 py-3.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
          >
            View All Episodes
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
