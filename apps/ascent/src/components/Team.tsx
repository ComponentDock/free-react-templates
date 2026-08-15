import { teamMembers, socials } from '../data'
import { BrandIcon } from './icons'

const socialLabels: Record<string, string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  instagram: 'Instagram',
}

export function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-brand">Team</span>
          <h2 className="mt-3 font-display text-4xl font-normal text-ink">Our Creative Team</h2>
          <p className="mt-4 text-muted">
            Tour function information without cross action media value quickly maximize timely
            deliverables.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-md">
                <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-ink/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {socials.map((social) => (
                    <a
                      key={social}
                      href="#team"
                      aria-label={`${member.name} on ${socialLabels[social]}`}
                      className="text-white transition-colors hover:text-brand"
                    >
                      <BrandIcon name={social} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-display text-xl font-normal text-ink">{member.name}</h3>
                <p className="mt-1 text-muted">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
