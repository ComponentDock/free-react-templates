import { BrandIcon, type BrandName } from './BrandIcon'

const volunteers = [
  {
    name: 'Jessica Watson',
    role: 'Project Coordinator',
    image: 'mercy-vol-1',
  },
  {
    name: 'Robert Garcia',
    role: 'Field Manager',
    image: 'mercy-vol-2',
  },
  {
    name: 'Lisa Anderson',
    role: 'Community Outreach',
    image: 'mercy-vol-3',
  },
  {
    name: 'James Mitchell',
    role: 'Fundraising Lead',
    image: 'mercy-vol-4',
  },
] as const

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Volunteers() {
  return (
    <section id="volunteer" className="bg-white py-16 transition-colors dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Volunteers
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
            Meet Our Team
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((vol) => (
            <div
              key={vol.name}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-800"
            >
              <img
                src={`https://picsum.photos/seed/${vol.image}/400/400`}
                alt={vol.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-ink dark:text-white">{vol.name}</h3>
                <p className="mt-1 text-sm text-mist">{vol.role}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={`${vol.name} on ${social.label}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand dark:border-gray-700"
                    >
                      <BrandIcon name={social.name} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
