import { BrandIcon } from './BrandIcon'

const members = [
  {
    name: 'Dolores Webster',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/pediment-team1/600/700',
    bio: 'Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget.',
  },
  {
    name: 'Dana Vaughn',
    role: 'Architect',
    image: 'https://picsum.photos/seed/pediment-team2/600/700',
    bio: 'Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget.',
  },
  {
    name: 'Jonathan Mcdaniel',
    role: 'Architect',
    image: 'https://picsum.photos/seed/pediment-team3/600/700',
    bio: 'Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies consectetur. Ut viverra porta leo, non tincidunt mauris condimentum eget.',
  },
] as const

export function Team() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
              Our Team
            </span>
            <h2 className="font-display text-3xl font-bold text-body sm:text-4xl">Meet our team</h2>
          </div>
          <a
            href="#"
            className="inline-block border-2 border-brand px-6 py-2 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View All
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="group relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-96 w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                <h5 className="text-lg font-semibold text-white">{member.name}</h5>
                <span className="mb-3 text-sm text-brand">{member.role}</span>
                <p className="mb-4 text-xs leading-relaxed text-white/70">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label={`${member.name} on Facebook`}
                    className="text-white/60 transition-colors hover:text-brand"
                  >
                    <BrandIcon name="facebook" className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on Twitter`}
                    className="text-white/60 transition-colors hover:text-brand"
                  >
                    <BrandIcon name="x" className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on Instagram`}
                    className="text-white/60 transition-colors hover:text-brand"
                  >
                    <BrandIcon name="instagram" className="h-4 w-4" />
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
