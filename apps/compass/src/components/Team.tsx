import { team } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = [
  { label: 'Facebook', name: 'facebook', href: '#' },
  { label: 'Twitter', name: 'twitter', href: '#' },
  { label: 'Instagram', name: 'instagram', href: '#' },
  { label: 'LinkedIn', name: 'linkedin', href: '#' },
] as const

/* Team grid: eight photo cards in rows of four; a social icon bar slides in
 * from the left on hover (source #team-section .team-member). */
export function Team() {
  return (
    <section id="team" data-testid="team" className="border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="max-w-xl">
          <h2 className="text-4xl font-black leading-tight text-brand md:text-[40px]">
            {team.title}
          </h2>
          <p className="mt-4 text-lg font-light text-smoke">{team.lead}</p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((member) => (
            <div key={member.name} className="group">
              <figure className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[3/4] w-full object-cover"
                />
                <ul
                  data-testid="team-socials"
                  className="absolute inset-y-0 left-0 flex -translate-x-full flex-col justify-center gap-2 bg-white/95 p-3 transition-transform duration-300 group-hover:translate-x-0"
                >
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        <BrandIcon name={social.name} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </figure>
              <h3 className="mt-4 text-lg font-bold text-ink">{member.name}</h3>
              <p className="text-sm text-smoke">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
