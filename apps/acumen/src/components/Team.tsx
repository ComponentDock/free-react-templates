import { BrandIcon, type BrandName } from './BrandIcon'

const members = [
  { name: 'Roberto Peo', role: 'SEO Expert', seed: 'acumen-team-1' },
  { name: 'Jhon Doe', role: 'Web Developer', seed: 'acumen-team-2' },
  { name: 'Jakia Khan', role: 'UI/UX Designer', seed: 'acumen-team-3' },
  { name: 'Jack Kalis', role: 'Programmer', seed: 'acumen-team-4' },
] as const

const socials: ReadonlyArray<{ name: BrandName; label: string }> = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'x', label: 'X' },
  { name: 'linkedin', label: 'LinkedIn' },
  { name: 'instagram', label: 'Instagram' },
]

export function Team() {
  return (
    <section id="team" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Our Team</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map(({ name, role, seed }) => (
            <div key={name} className="group text-center">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${seed}/200/200`}
                  alt={name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-brand/80 opacity-0 transition-opacity group-hover:opacity-100">
                  {socials.map(({ name: socialName, label }) => (
                    <a key={label} href="#team" aria-label={label} className="text-white">
                      <BrandIcon name={socialName} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-mist">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
