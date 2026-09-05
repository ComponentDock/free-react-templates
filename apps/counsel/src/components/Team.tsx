import { Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const attorneys = [
  {
    name: 'Sarah Johnson',
    role: 'Managing Partner',
    image: 'https://picsum.photos/seed/counsel-team-1/400/500',
    email: 'sarah@counsel.com',
  },
  {
    name: 'Michael Chen',
    role: 'Senior Attorney',
    image: 'https://picsum.photos/seed/counsel-team-2/400/500',
    email: 'michael@counsel.com',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Associate Attorney',
    image: 'https://picsum.photos/seed/counsel-team-3/400/500',
    email: 'emily@counsel.com',
  },
]

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Meet Our Attorneys
          </h2>
          <p className="mt-4 text-base text-mist">The people behind our success</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((person) => (
            <div key={person.name} className="group relative overflow-hidden rounded-xl">
              <img src={person.image} alt={person.name} className="h-80 w-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/0 p-6 text-center opacity-0 transition-all duration-300 group-hover:bg-ink/80 group-hover:opacity-100">
                <h3 className="font-display text-xl font-bold text-white">{person.name}</h3>
                <p className="mt-1 text-sm text-brand-light">{person.role}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`mailto:${person.email}`}
                    aria-label={`Email ${person.name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on Facebook`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name="facebook" className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on Twitter`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name="twitter" className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on Instagram`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand"
                  >
                    <BrandIcon name="instagram" className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 text-center">
                <h3 className="font-display text-lg font-bold text-ink">{person.name}</h3>
                <p className="text-sm text-mist">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
