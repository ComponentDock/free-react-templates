import { LinkedinIcon, XIcon } from './social-icons'

interface Speaker {
  name: string
  role: string
  talk: string
  photo: string
}

const speakers: Speaker[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Officer, OpenMind Labs',
    talk: 'The Future of AI: Beyond Large Language Models',
    photo: 'https://picsum.photos/seed/podium-1/400/500',
  },
  {
    name: 'Marcus Johnson',
    role: 'VP of Engineering, CloudScale',
    talk: 'Scaling Infrastructure for the Next Billion Users',
    photo: 'https://picsum.photos/seed/podium-2/400/500',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder & CEO, GreenTech Ventures',
    talk: 'Building Sustainable Tech Companies',
    photo: 'https://picsum.photos/seed/podium-3/400/500',
  },
  {
    name: 'David Kim',
    role: 'Principal Designer, Figma',
    talk: 'Design Systems at Scale',
    photo: 'https://picsum.photos/seed/podium-4/400/500',
  },
  {
    name: 'Aisha Patel',
    role: 'Security Researcher, CyberShield',
    talk: 'Zero Trust Architecture in Practice',
    photo: 'https://picsum.photos/seed/podium-5/400/500',
  },
  {
    name: 'James Wright',
    role: 'CTO, QuantumLeap',
    talk: 'Quantum Computing: From Theory to Reality',
    photo: 'https://picsum.photos/seed/podium-6/400/500',
  },
]

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            World-Class Speakers
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Learn From the{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Industry leaders and innovators sharing their insights and expertise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <article
              key={speaker.name}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="mb-2 text-sm font-medium text-primary-400">{speaker.talk}</p>
                <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                <p className="mt-1 text-sm text-gray-300">{speaker.role}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href="#speakers"
                    aria-label={`${speaker.name} on X`}
                    className="text-white/70 transition-colors hover:text-primary-400"
                  >
                    <XIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="#speakers"
                    aria-label={`${speaker.name} on LinkedIn`}
                    className="text-white/70 transition-colors hover:text-primary-400"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
