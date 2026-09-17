const members = [
  {
    name: 'Alex Rivera',
    role: 'Web Designer',
    avatar: 'https://picsum.photos/seed/vivid-team-1/400/400',
  },
  {
    name: 'Jordan Lee',
    role: 'Developer',
    avatar: 'https://picsum.photos/seed/vivid-team-2/400/400',
  },
  {
    name: 'Casey Morgan',
    role: 'Creative Director',
    avatar: 'https://picsum.photos/seed/vivid-team-3/400/400',
  },
]

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Team() {
  return (
    <section id="team" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Our Team</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Team grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="group text-center">
              {/* Image with overlay */}
              <div className="relative mb-4 overflow-hidden rounded">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 flex items-center justify-center bg-heading/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label={`${member.name} on Facebook`}
                      className="text-white hover:text-primary"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="#"
                      aria-label={`${member.name} on Twitter`}
                      className="text-white hover:text-primary"
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href="#"
                      aria-label={`${member.name} on Instagram`}
                      className="text-white hover:text-primary"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-heading">{member.name}</h3>
              <span className="text-sm text-body">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
