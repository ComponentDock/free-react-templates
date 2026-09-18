import { BrandIcon, type BrandName } from './BrandIcon'

const members = [
  { name: 'Alex Morgan', role: 'CEO & Founder', seed: 'techwise-team-1' },
  { name: 'Sarah Chen', role: 'Lead Designer', seed: 'techwise-team-2' },
  { name: 'James Wilson', role: 'Tech Director', seed: 'techwise-team-3' },
  { name: 'Emily Brown', role: 'Marketing Head', seed: 'techwise-team-4' },
  { name: 'David Lee', role: 'Project Manager', seed: 'techwise-team-5' },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'dribbble', label: 'Dribbble' },
]

export function Team() {
  return (
    <section id="team" className="bg-white py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">Our Team</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded bg-light-bg text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/500/500`}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-bg">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {member.role}
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={`${member.name} on ${social.label}`}
                      className="text-mist transition-colors hover:text-brand"
                    >
                      <BrandIcon name={social.name} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#team"
            className="inline-block rounded border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View All Staff
          </a>
        </div>
      </div>
    </section>
  )
}
