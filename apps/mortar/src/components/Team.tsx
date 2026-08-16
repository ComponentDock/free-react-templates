import { team } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['twitter', 'facebook', 'instagram', 'googleplus'] as const

const socialLabels: Record<(typeof socials)[number], string> = {
  twitter: 'Twitter',
  facebook: 'Facebook',
  instagram: 'Instagram',
  googleplus: 'Google+',
}

export function Team() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {team.kicker}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">{team.heading}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member) => (
            <article
              key={member.name}
              className="rounded bg-white shadow-[0_24px_48px_-13px_rgba(0,0,0,0.05)]"
            >
              <div className="group relative overflow-hidden rounded-t">
                <img
                  src={`https://picsum.photos/seed/${member.photoSeed}/400/500`}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
                <ul className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-charcoal/80 py-3 opacity-0 transition-opacity group-hover:opacity-100">
                  {socials.map((social) => (
                    <li key={social}>
                      <a
                        href="#team"
                        aria-label={`${member.name} on ${socialLabels[social]}`}
                        className="flex h-8 w-8 items-center justify-center text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        <BrandIcon name={social} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-charcoal">{member.name}</h3>
                <span className="mt-1 block text-sm text-brand">{team.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
