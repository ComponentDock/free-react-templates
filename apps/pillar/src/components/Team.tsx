import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './social-icons'

const members = [
  { name: 'Cloe Marena', role: 'Architect', seed: 'pillar-team-1' },
  { name: 'John Rooster', role: 'Designer', seed: 'pillar-team-2' },
  { name: 'Will Turner', role: 'Designer', seed: 'pillar-team-3' },
  { name: 'Nicolas Stainer', role: 'Engineer', seed: 'pillar-team-4' },
  { name: 'George Brook', role: 'Architect', seed: 'pillar-team-5' },
  { name: 'Emely Hopson', role: 'Designer', seed: 'pillar-team-6' },
]

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Team() {
  return (
    <section id="team" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Our Team
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi.
            Magni deserunt necessitatibus perferendis.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <div className="mb-4 overflow-hidden rounded">
                <img
                  src={`https://picsum.photos/seed/${m.seed}/400/400`}
                  alt={m.name}
                  className="h-64 w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
              <p className="mb-3 text-sm text-accent">{m.role}</p>
              <div className="flex justify-center gap-2">
                {socialIcons.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-accent hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
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
