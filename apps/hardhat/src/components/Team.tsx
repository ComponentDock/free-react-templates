function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 003.96 9.824a4.647 4.647 0 01-2.11-.583v.06a4.66 4.66 0 003.737 4.568 4.692 4.692 0 01-2.104.08 4.661 4.661 0 004.352 3.234 9.348 9.348 0 01-5.786 1.995 9.5 9.5 0 01-1.112-.065 13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 002.323-2.41l.002-.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const team = [
  {
    name: 'Ethan Welch',
    role: 'UX Designer',
    image: 'https://picsum.photos/seed/hardhat-team1/400/400',
  },
  {
    name: 'Jessica Parker',
    role: 'Project Manager',
    image: 'https://picsum.photos/seed/hardhat-team2/400/400',
  },
  {
    name: 'Daniel Ross',
    role: 'Site Engineer',
    image: 'https://picsum.photos/seed/hardhat-team3/400/400',
  },
] as const

export function Team() {
  return (
    <section aria-label="Team" className="bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative mb-12 text-center">
          <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-6xl font-bold uppercase tracking-wide text-gray-200 sm:text-8xl select-none">
            Experts
          </span>
          <h2 className="relative font-display text-3xl font-bold uppercase tracking-wide text-navy sm:text-4xl">
            Our team
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-semibold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-smoke">{member.role}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <a
                    href="#twitter"
                    aria-label={`${member.name} on Twitter`}
                    className="text-gray-400 transition-colors hover:text-brand"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#facebook"
                    aria-label={`${member.name} on Facebook`}
                    className="text-gray-400 transition-colors hover:text-brand"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#linkedin"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-gray-400 transition-colors hover:text-brand"
                  >
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
