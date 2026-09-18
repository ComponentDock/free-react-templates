function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

const team = [
  {
    name: 'James Wilson',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/coincast-team1/300/300',
  },
  {
    name: 'Anna Martinez',
    role: 'CTO',
    image: 'https://picsum.photos/seed/coincast-team2/300/300',
  },
  {
    name: 'David Kim',
    role: 'Lead Analyst',
    image: 'https://picsum.photos/seed/coincast-team3/300/300',
  },
  {
    name: 'Lisa Thompson',
    role: 'Head of Marketing',
    image: 'https://picsum.photos/seed/coincast-team4/300/300',
  },
]

export function Team() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Our Team</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article key={m.name} className="group text-center">
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{m.name}</h3>
              <p className="text-sm text-mist">{m.role}</p>
              <div className="mt-3 flex justify-center gap-3">
                <a
                  href="#"
                  aria-label={`${m.name} on Twitter`}
                  className="text-mist transition-colors hover:text-brand"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="text-mist transition-colors hover:text-brand"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="#"
                  aria-label={`${m.name} on Facebook`}
                  className="text-mist transition-colors hover:text-brand"
                >
                  <FacebookIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
