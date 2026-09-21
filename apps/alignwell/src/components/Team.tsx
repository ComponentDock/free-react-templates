import { BrandIcon, type BrandName } from './BrandIcon'

const team = [
  {
    name: 'Lloyd Wilson',
    role: 'Chief Medical Officer',
    image: 'https://picsum.photos/seed/alignwell-staff1/400/500',
  },
  {
    name: 'Rachel Parker',
    role: 'Chiropractor',
    image: 'https://picsum.photos/seed/alignwell-staff2/400/500',
  },
  {
    name: 'Ian Smith',
    role: 'Clinical Chiropractic Assistant',
    image: 'https://picsum.photos/seed/alignwell-staff3/400/500',
  },
  {
    name: 'Alicia Henderson',
    role: 'Licensed Massage Therapist',
    image: 'https://picsum.photos/seed/alignwell-staff4/400/500',
  },
  {
    name: 'Marcus Lee',
    role: 'Front Desk Coordinator',
    image: 'https://picsum.photos/seed/alignwell-staff5/400/500',
  },
] as const

const socials: BrandName[] = ['twitter', 'facebook', 'google', 'instagram']

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Team & Staff
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">
            Our Expert Chiropractors & Therapists
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {team.map((member) => (
            <div
              key={member.name}
              className="shrink-0 w-64 snap-center rounded-2xl bg-brand text-white shadow-lg"
            >
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-blue-100">{member.role}</p>
                <div className="mt-3 flex justify-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                    >
                      <BrandIcon name={s} className="h-3.5 w-3.5" />
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
