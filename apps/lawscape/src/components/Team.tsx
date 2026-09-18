import { Globe, Mail, Share2 } from 'lucide-react'

const attorneys = [
  {
    name: 'James Barrel',
    specialization: 'Personal Lawyer',
    image: 'https://picsum.photos/seed/lawscape-team1/400/500',
  },
  {
    name: 'Stephen Red',
    specialization: 'Personal Lawyer',
    image: 'https://picsum.photos/seed/lawscape-team2/400/500',
  },
  {
    name: 'Matmex Sogan',
    specialization: 'Personal Lawyer',
    image: 'https://picsum.photos/seed/lawscape-team3/400/500',
  },
  {
    name: 'Richar Male',
    specialization: 'Personal Lawyer',
    image: 'https://picsum.photos/seed/lawscape-team4/400/500',
  },
] as const

export function Team() {
  return (
    <section id="team" aria-label="Team" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Meet Our Attorneys
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-smoke">
            Female divided bearing rule one called said Beginning set you living above saw seasons
            void created fruitful third years god.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="group overflow-hidden bg-light-bg transition-all hover:bg-white hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t-2 border-transparent p-5 text-center transition-colors group-hover:border-primary-500">
                <h3 className="font-heading text-lg font-bold text-ink">{attorney.name}</h3>
                <p className="mt-1 text-sm text-smoke">{attorney.specialization}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href="#"
                    aria-label={`${attorney.name} on Facebook`}
                    className="text-smoke transition-colors hover:text-primary-500"
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${attorney.name} on Twitter`}
                    className="text-smoke transition-colors hover:text-primary-500"
                  >
                    <Share2 className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Email ${attorney.name}`}
                    className="text-smoke transition-colors hover:text-primary-500"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
