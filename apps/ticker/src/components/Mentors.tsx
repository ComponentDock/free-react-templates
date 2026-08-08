import { GithubIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const mentors = [
  {
    name: 'Alex Krieger',
    role: 'Crypto & Options Analyst',
    bio: 'Ex-prop trader with 12 years in crypto derivatives. Generated $2.4M+ in verified profits for his students.',
    record: '$2.4M+ verified profits',
    avatar: 'https://picsum.photos/seed/ticker-11/200/200',
  },
  {
    name: 'Sarah Chen',
    role: 'Forex & Macro Analyst',
    bio: 'Former institutional FX desk head. Specializes in macro themes and central-bank trading.',
    record: '15,000+ students mentored',
    avatar: 'https://picsum.photos/seed/ticker-12/200/200',
  },
  {
    name: 'Marcus Williams',
    role: 'Day Trading Coach',
    bio: 'Built a seven-figure trading business from a $500 account. Teaches disciplined risk-first day trading.',
    record: '73% avg. student win rate',
    avatar: 'https://picsum.photos/seed/ticker-13/200/200',
  },
  {
    name: 'Elena Kowalski',
    role: 'Quant & Algo Strategist',
    bio: 'Quant researcher who automated her edge. Leads the Algorithmic Trading with Python course.',
    record: '$9M+ backtested strategies',
    avatar: 'https://picsum.photos/seed/ticker-14/200/200',
  },
] as const

const socials = [
  { label: 'Twitter profile', icon: TwitterIcon },
  { label: 'LinkedIn profile', icon: LinkedinIcon },
  { label: 'GitHub profile', icon: GithubIcon },
] as const

export function Mentors() {
  return (
    <section id="mentors" className="bg-gray-100 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Learn from Millionaire Traders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Every mentor trades live, every day. Their track records are verified and their
            playbooks are taught in full.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center transition-colors hover:border-primary-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-700"
            >
              <img
                src={mentor.avatar}
                alt={`${mentor.name} portrait`}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-primary-500/30"
              />
              <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                {mentor.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                {mentor.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {mentor.bio}
              </p>
              <p className="mt-4 rounded-lg bg-success-500/10 px-3 py-2 text-xs font-semibold text-success-600 dark:text-success-400">
                {mentor.record}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#mentors"
                    aria-label={`${mentor.name} ${social.label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
