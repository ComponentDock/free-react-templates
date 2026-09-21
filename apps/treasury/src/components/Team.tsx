import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const team = [
  { name: 'Kaiara Spencer', role: 'Financial Advisor', seed: 'team-1' },
  { name: 'Dave Simpson', role: 'Investment Analyst', seed: 'team-2' },
  { name: 'Ben Thompson', role: 'Risk Manager', seed: 'team-3' },
  { name: 'Kyla Stewart', role: 'Account Executive', seed: 'team-4' },
] as const

export function Team() {
  return (
    <section
      id="team"
      className="border-b border-gray-100 bg-white py-16 transition-colors dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Meet Team</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ name, role, seed }) => (
            <div key={name} className="text-center">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                <img
                  src={`https://picsum.photos/seed/${seed}/200/200`}
                  alt={name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink dark:text-white">{name}</h3>
              <p className="text-sm text-gray-500">{role}</p>
              <div className="mt-3 flex justify-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#team"
                    aria-label={`${name} ${social.label}`}
                    className="text-gray-400 transition-colors hover:text-brand"
                  >
                    <BrandIcon name={social.name} className="h-4 w-4" />
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
