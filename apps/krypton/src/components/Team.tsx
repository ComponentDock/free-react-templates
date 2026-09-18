import { SocialLinks } from './SocialLinks'

const members = [
  {
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    img: 'https://picsum.photos/seed/krypton-team1/300/300',
  },
  {
    name: 'James Carter',
    role: 'Lead Developer',
    img: 'https://picsum.photos/seed/krypton-team2/300/300',
  },
  {
    name: 'Emily Chen',
    role: 'UX Designer',
    img: 'https://picsum.photos/seed/krypton-team3/300/300',
  },
  {
    name: 'David Park',
    role: 'Marketing Strategist',
    img: 'https://picsum.photos/seed/krypton-team4/300/300',
  },
] as const

export function Team() {
  return (
    <section aria-label="Team" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body dark:text-gray-400">
            Talented professionals passionate about delivering exceptional results.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div
              key={m.name}
              className="group rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <img
                src={m.img}
                alt={m.name}
                className="mx-auto h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                {m.name}
              </h3>
              <p className="mt-1 text-sm text-primary-500">{m.role}</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
