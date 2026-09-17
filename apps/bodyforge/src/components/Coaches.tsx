const facebookSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const twitterSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const linkedinSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const coaches = [
  {
    name: 'Mike Thompson',
    specialty: 'Strength Coach',
    image: 'https://picsum.photos/seed/bodyforge-coach-1/400/500',
  },
  {
    name: 'Sarah Williams',
    specialty: 'Yoga Instructor',
    image: 'https://picsum.photos/seed/bodyforge-coach-2/400/500',
  },
  {
    name: 'James Carter',
    specialty: 'Cardio Specialist',
    image: 'https://picsum.photos/seed/bodyforge-coach-3/400/500',
  },
  {
    name: 'Emma Davis',
    specialty: 'Nutrition Expert',
    image: 'https://picsum.photos/seed/bodyforge-coach-4/400/500',
  },
] as const

const socialIcons = [
  { svg: facebookSvg, label: 'Facebook' },
  { svg: twitterSvg, label: 'Twitter' },
  { svg: linkedinSvg, label: 'LinkedIn' },
] as const

export function Coaches() {
  return (
    <section id="trainers" className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase text-heading">
          Our Fitness Coaches
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((coach) => (
            <div key={coach.name} className="group text-center">
              <div className="relative overflow-hidden rounded">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {socialIcons.map(({ svg, label }) => (
                    <a
                      key={label}
                      href={`#${label.toLowerCase()}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white transition-colors hover:bg-brand"
                      aria-label={label}
                    >
                      {svg}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-[-50px] bg-surface px-6 py-8 text-center shadow-md transition-shadow group-hover:shadow-xl">
                <h3 className="font-display text-lg font-bold uppercase text-heading transition-colors group-hover:text-brand">
                  {coach.name}
                </h3>
                <p className="mt-1 text-sm text-body-text">{coach.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
