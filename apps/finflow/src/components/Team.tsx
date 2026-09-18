import { BrandIcon } from './BrandIcon'

const members = [
  { name: 'Kaiara Spencer', role: 'Accountant', seed: 'finflow-team-1' },
  { name: 'Dave Simpson', role: 'Bank Teller', seed: 'finflow-team-2' },
  { name: 'Ben Thompson', role: 'Bank Teller', seed: 'finflow-team-3' },
] as const

const socials = ['facebook', 'twitter', 'linkedin'] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Meet Team
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/500/600`}
                  alt={`Portrait of ${member.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {socials.map((s) => (
                    <a
                      key={s}
                      href="#home"
                      aria-label={s}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-brand"
                    >
                      <BrandIcon name={s as 'facebook'} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ink dark:text-white">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
