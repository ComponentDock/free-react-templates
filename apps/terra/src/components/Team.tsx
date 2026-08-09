import { BrandIcon } from './BrandIcon'

const team = [
  {
    name: 'Kaye Bruce',
    role: 'Beautician',
    image: 'https://picsum.photos/seed/terra-team-1/400/500',
  },
  {
    name: 'Lanie William',
    role: 'Beautician',
    image: 'https://picsum.photos/seed/terra-team-2/400/500',
  },
  {
    name: 'Catherine Smith',
    role: 'Beautician',
    image: 'https://picsum.photos/seed/terra-team-3/400/500',
  },
  {
    name: 'Sonya Lopez',
    role: 'Beautician',
    image: 'https://picsum.photos/seed/terra-team-4/400/500',
  },
] as const

const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          Team
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-ink sm:text-4xl dark:text-white">
          Our Expert Makeup &amp; Beautician Artist
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-2xl bg-brand-soft text-center dark:bg-gray-900"
            >
              <img
                src={member.image}
                alt={member.name}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg text-ink dark:text-white">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {member.role}
                </p>
                <ul className="mt-4 flex justify-center gap-4">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href="#team"
                        aria-label={social.label}
                        className="text-muted transition-colors hover:text-brand"
                      >
                        <BrandIcon name={social.name} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
