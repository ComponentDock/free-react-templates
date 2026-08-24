import { BrandIcon, type BrandName } from './BrandIcon'

interface Volunteer {
  name: string
  role: string
  image: string
  socials: { label: string; name: BrandName }[]
}

const volunteers: Volunteer[] = [
  {
    name: 'Jason Smith',
    role: 'Volunteer',
    image: 'https://picsum.photos/seed/cuddle-vol-1/400/400',
    socials: [
      { label: 'Twitter', name: 'twitter' },
      { label: 'Facebook', name: 'facebook' },
      { label: 'Google', name: 'google' },
      { label: 'Instagram', name: 'instagram' },
    ],
  },
  {
    name: 'Anne Hayes',
    role: 'Volunteer',
    image: 'https://picsum.photos/seed/cuddle-vol-2/400/400',
    socials: [
      { label: 'Twitter', name: 'twitter' },
      { label: 'Facebook', name: 'facebook' },
      { label: 'Google', name: 'google' },
      { label: 'Instagram', name: 'instagram' },
    ],
  },
  {
    name: 'Martha Smith',
    role: 'Volunteer',
    image: 'https://picsum.photos/seed/cuddle-vol-3/400/400',
    socials: [
      { label: 'Twitter', name: 'twitter' },
      { label: 'Facebook', name: 'facebook' },
      { label: 'Google', name: 'google' },
      { label: 'Instagram', name: 'instagram' },
    ],
  },
  {
    name: 'Mike Tyson',
    role: 'Volunteer',
    image: 'https://picsum.photos/seed/cuddle-vol-4/400/400',
    socials: [
      { label: 'Twitter', name: 'twitter' },
      { label: 'Facebook', name: 'facebook' },
      { label: 'Google', name: 'google' },
      { label: 'Instagram', name: 'instagram' },
    ],
  },
] as const

export function Volunteers() {
  return (
    <section id="volunteer" className="py-20 sm:py-28 bg-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl text-ink">
            Our Volunteer
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((volunteer) => (
            <VolunteerCard key={volunteer.name} volunteer={volunteer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VolunteerCard({ volunteer }: { volunteer: Volunteer }) {
  return (
    <article className="text-center">
      <div className="relative aspect-square rounded-full overflow-hidden border-4 border-brand-light">
        <img
          src={volunteer.image}
          alt={`${volunteer.name} - ${volunteer.role}`}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink">{volunteer.name}</h3>
      <p className="text-sm text-mist">{volunteer.role}</p>
      <div className="mt-4 flex justify-center gap-3">
        {volunteer.socials.map((social) => (
          <a
            key={social.label}
            href="#"
            aria-label={social.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-mist transition-colors hover:border-brand hover:bg-brand hover:text-white dark:border-gray-700"
          >
            <BrandIcon name={social.name} className="h-4 w-4" />
          </a>
        ))}
      </div>
    </article>
  )
}
