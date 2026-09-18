const TEAM = [
  { name: 'David Droga', role: 'CEO & Founder', image: 'millstone-team-1' },
  { name: 'Jhonthan Smith', role: 'Head of Operations', image: 'millstone-team-2' },
  { name: 'Kristiana Bownty', role: 'Project Manager', image: 'millstone-team-3' },
  { name: 'Michael Chen', role: 'Lead Engineer', image: 'millstone-team-4' },
  { name: 'Sarah Williams', role: 'Quality Director', image: 'millstone-team-5' },
]

function SocialIcon({ d }: { d: string }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const LINKEDIN_D =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
const TWITTER_D =
  'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
const FACEBOOK_D =
  'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <article className="group text-center">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={`https://picsum.photos/seed/${image}/300/350`}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary-400/0 group-hover:bg-primary-400/20 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <a
            href="#"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-navy hover:bg-primary-400 hover:text-white transition-colors"
            aria-label={`Follow ${name} on LinkedIn`}
          >
            <SocialIcon d={LINKEDIN_D} />
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-navy hover:bg-primary-400 hover:text-white transition-colors"
            aria-label={`Follow ${name} on Twitter`}
          >
            <SocialIcon d={TWITTER_D} />
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-navy hover:bg-primary-400 hover:text-white transition-colors"
            aria-label={`Follow ${name} on Facebook`}
          >
            <SocialIcon d={FACEBOOK_D} />
          </a>
        </div>
      </div>
      <h3 className="font-heading text-base font-bold text-heading">{name}</h3>
      <p className="font-body text-sm text-primary-400">{role}</p>
    </article>
  )
}

export function Team() {
  return (
    <section id="team" className="py-16 bg-mist">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-heading mb-3">
            Our Team Best Members
          </h2>
          <p className="font-body text-sm text-body max-w-2xl mx-auto">
            Meet the experienced professionals driving our success in the industrial sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {TEAM.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
