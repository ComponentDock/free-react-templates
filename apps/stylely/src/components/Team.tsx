import { BrandIcon, type BrandName } from './BrandIcon'

const members = [
  { name: 'Adam Billiard', role: 'Master Barber', initials: 'AB', seed: 'stylely-team-1' },
  { name: 'Fred Macyard', role: 'Style Director', initials: 'FM', seed: 'stylely-team-2' },
  { name: 'Justin Stuard', role: 'Grooming Expert', initials: 'JS', seed: 'stylely-team-3' },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Team() {
  return (
    <section id="team" className="py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Meet Our Artist
          </h2>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            The hands behind the chair
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <article
              key={member.name}
              className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${member.seed}/400/400`}
                alt={`${member.name} portrait`}
                loading="lazy"
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-6 font-display text-xl font-semibold text-ink dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand">
                {member.role}
              </p>
              <div className="mt-5 flex items-center justify-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#team"
                    aria-label={`${member.name} ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
