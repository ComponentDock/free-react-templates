import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'

const members = [
  { name: 'Cloe Marena', role: 'Architect', image: 'https://picsum.photos/seed/team1/400/400' },
  { name: 'John Rooster', role: 'Designer', image: 'https://picsum.photos/seed/team2/400/400' },
  { name: 'Will Turner', role: 'Engineer', image: 'https://picsum.photos/seed/team3/400/400' },
  { name: 'Nicolas Stainer', role: 'Planner', image: 'https://picsum.photos/seed/team4/400/400' },
  { name: 'George Brook', role: 'Director', image: 'https://picsum.photos/seed/team5/400/400' },
  { name: 'Emely Hopson', role: 'Consultant', image: 'https://picsum.photos/seed/team6/400/400' },
] as const

export function Team() {
  return (
    <section id="team" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Meet Our Team
        </p>
        <h2 className="mb-8 text-center text-3xl font-bold text-ink">Our Team</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-mist">
          Our team of experienced professionals is dedicated to delivering exceptional design
          solutions tailored to your needs.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map(({ name, role, image }) => (
            <div key={name} className="group text-center">
              <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${name} on Facebook`}
                    className="text-white hover:text-brand"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${name} on Twitter`}
                    className="text-white hover:text-brand"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${name} on Instagram`}
                    className="text-white hover:text-brand"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-ink">{name}</h3>
              <p className="text-sm text-brand">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
